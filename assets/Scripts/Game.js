// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
let ModuleMgr = require('ModuleMgr');
let DynamicDt = require('DynamicDt');
cc.Class({
    extends: cc.Component,

    properties: {
        btnRed:cc.Node,
        num1:cc.Node,
        num2:cc.Node,
        num3:cc.Node,
        Menu:cc.Node,
        lockBg:cc.Node,
        ConGame:cc.Node,
        MainMenu:cc.Node,
        GradeName:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        // this.anims = this.node.getComponent(cc.Animation);
        // this.MenuAnims = this.Menu.getComponent(cc.Animation);
        this.btnRed.on('click',this.showMenu,this);
        this.ConGame.on('click',()=>{
            this.Menu.active = false;
            this.lockBg.active = false;
            cc.director.resume();
        });
        this.MainMenu.on('click',()=>{
            cc.director.resume();
            this.Menu.active = false;
            this.lockBg.active = false;
            cc.director.loadScene('Menu');
        })
        this.num1Sprite =  this.num1.getComponent(cc.Sprite);
        this.num2Sprite =  this.num2.getComponent(cc.Sprite);
        this.num3Sprite =  this.num3.getComponent(cc.Sprite);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
       // manager.enabledDebugDraw = true;
         this.registerModules();
         this.Menu.active = false;
         this.lockBg.active = false;
     },
     showMenu(event){
       // this.node.pauseSystemEvents();
        cc.director.pause();
        // this.anims.play();
        // this.MenuAnims.play();
        this.Menu.active = true;
        this.lockBg.active = true;
     },

    // start () {

    // },
    registerModules(){
        cc.moduleMgr = new ModuleMgr();
        let arrNameN = ['Map1Bg','Fish','Tower','BulletMgr'];
        let arrNameCom = ['BgMgr','FishMgr','TowerMgr','BulletMgr'];
        for(let i = 0; i < arrNameN.length; i++){
            let node = this.node.getChildByName(arrNameN[i]);
            let comp = node.getComponent(arrNameCom[i]);
            cc.moduleMgr.registerModule(arrNameCom[i], comp);
        }
    },

     update (dt) {
         let GradeDt = cc.configMgr.getConfig('GradeDt').getDataByID(DynamicDt.getInstance().getGradeName());
         this.GradeName.string = GradeDt.Name;
         this.num1Sprite.spriteFrame = cc.resMgr.getSpriteFrame(Math.floor(DynamicDt.getInstance().getCoinNum()/100).toString());
         this.num2Sprite.spriteFrame = cc.resMgr.getSpriteFrame(Math.floor((DynamicDt.getInstance().getCoinNum()%100)/10).toString());
         this.num3Sprite.spriteFrame = cc.resMgr.getSpriteFrame(Math.floor(DynamicDt.getInstance().getCoinNum()%10).toString());
     //   this.CoinNum.string = cc.dynamicDt.getCoinNum();
     },
});
