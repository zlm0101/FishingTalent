let ModuleBase = require('ModuleBase');
const DynamicDt = require('./DynamicDt');
cc.Class({
    extends: ModuleBase,

    properties: {
        UpGrade:cc.Node,
        DownGrade:cc.Node,
    },


     onLoad () {
        let canvasN = cc.find('Canvas');
         this.updateTower();
         this.UpGrade.on('click',this.towerUpGrade,this);
         this.DownGrade.on('click',this.towerDownGrade,this);
         canvasN.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
         canvasN.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
         canvasN.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
     },

     onTouchStart(event){
         let BirthP = cc.v2(0,1);
         //let childN = this.node.getChildren();
        let pos = event.getLocation();
        let vec = (pos.sub((this.node.getPosition()))).normalize();
       this.node.angle = -(cc.misc.radiansToDegrees(vec.signAngle(BirthP)));
        this.anims.play();
        this.fire(this.node.angle,vec);
     },

     towerUpGrade(event){
         this.node.removeAllChildren();
         if(DynamicDt.getInstance().getGrade() === 7){
            DynamicDt.getInstance().setGrade(1);
         }
         else{
            DynamicDt.getInstance().setGrade(DynamicDt.getInstance().getGrade()+1);
         }
         this.updateTower();
     },


     fire(angle,vec){
      let TowerDt = cc.configMgr.getConfig('TowerDt').getDataByID(DynamicDt.getInstance().getGrade()+4000);
      if(DynamicDt.getInstance().getCoinNum()>=DynamicDt.getInstance().getGrade()){
         let BulletDt = cc.configMgr.getConfig('BulletDt').getDataByID(TowerDt.bulletID);
         let BulletPre = cc.resMgr.getPrefab(BulletDt.prefab);
         let BulletN = cc.instantiate(BulletPre);
         BulletN.probability = TowerDt.probability;
         let bulletJs = BulletN.getComponent('Bullet');
         bulletJs.init(BulletDt,angle,vec,TowerDt.probability);
   
        // bulletJs.move();
         this.sendMsg('BulletMgr','addBullet',BulletN);
   
         DynamicDt.getInstance().setCoinNum(DynamicDt.getInstance().getCoinNum() - DynamicDt.getInstance().getGrade());
      }  
     },
     towerDownGrade(event){
        this.node.removeAllChildren();
        if(DynamicDt.getInstance().getGrade() === 1){
         DynamicDt.getInstance().setGrade(7);
         }
         else{
            DynamicDt.getInstance().setGrade(DynamicDt.getInstance().getGrade()-1);
         }
         this.updateTower();
     },
     updateTower(){
        let TowerDt = cc.configMgr.getConfig('TowerDt').getDataByID(DynamicDt.getInstance().getGrade()+4000);
        let prefab = cc.resMgr.getPrefab(TowerDt.prefab);
        let TowerN = cc.instantiate(prefab);
        TowerN.parent = this.node;
        this.anims = TowerN.getComponent(cc.Animation);
     },
    start () {

    },

    // update (dt) {},
});
