let LevelMgr = require('LevelMgr');
let DynamicDt = require('DynamicDt');
cc.Class({
    extends: cc.Component,

    properties: {
        btnNextMap:cc.Node,
        btnLastMap:cc.Node,
        btnBack:cc.Node,
        LevelSelPage:cc.PageView,
        GameStart1:cc.Node,
        GameStart2:cc.Node,
        GameStart3:cc.Node,
        CoinNum:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         cc.levelMgr = new LevelMgr();
         //let arrPage = this.LevelSelPage.getPages();
         this.btnBack.on('click',()=>{ cc.director.loadScene('Menu');},this);
         this.btnNextMap.on('click',()=>{this.LevelSelPage.setCurrentPageIndex(this.LevelSelPage.getCurrentPageIndex()+1)},this);
         this.btnLastMap.on('click',()=>{this.LevelSelPage.setCurrentPageIndex(this.LevelSelPage.getCurrentPageIndex()-1)},this);
         this.GameStart1.on('click',()=>{cc.levelMgr.setLevelID(this.LevelSelPage.getCurrentPageIndex()+1001);cc.director.loadScene('Game');},this);
         this.GameStart2.on('click',()=>{cc.levelMgr.setLevelID(this.LevelSelPage.getCurrentPageIndex()+1001);cc.director.loadScene('Game');},this);
         this.GameStart3.on('click',()=>{cc.levelMgr.setLevelID(this.LevelSelPage.getCurrentPageIndex()+1001);cc.director.loadScene('Game');},this);
     },

    start () {
    },

     update (dt) {
      this.CoinNum.string = DynamicDt.getInstance().getCoinNum();
        if(this.LevelSelPage.getCurrentPageIndex() === 3){
            this.btnNextMap.active = false;
         }
         else{
            this.btnNextMap.active = true;
         }
         if(this.LevelSelPage.getCurrentPageIndex() === 0){
            this.btnLastMap.active = false;
         }
         else{
            this.btnLastMap.active = true;
         }
     },
});
