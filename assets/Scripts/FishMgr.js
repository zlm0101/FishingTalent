let ModuleBase = require('ModuleBase');
cc.Class({
    extends: ModuleBase,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         //在半径为850的圆上定义随机坐标
         this.center = cc.v2(568,320);
         this.m_nDir = cc.v2(0,0);
       let levelDt = cc.levelMgr.getLevelDt();
        let arrFishID = levelDt.fishID;
       this.arrFishDt = [];
        for(let i=0;i<arrFishID.length;i++){
            let FishDt =  cc.configMgr.getConfig('FishDt').getDataByID(arrFishID[i]);
            this.arrFishDt[i] = FishDt;  
        }
        this.schedule(this.createFish,0.5);
        // let fishPre = cc.resMgr.getPrefab(arrFishDt[0].prefab);
        // let fishN = cc.instantiate(fishPre);
        // fishN.parent = this.node;
        // fishN.x = 500;
        // fishN.y = 500;
     },

     createFish(){
        let jilv = Math.random()*10;
        if(jilv < 8){
        let num = Math.floor(Math.random()*(this.arrFishDt.length-2));
        let fishPre = cc.resMgr.getPrefab(this.arrFishDt[num].prefab);
        let fishN = cc.instantiate(fishPre);
        fishN.parent = this.node;
        let x = Math.random()*1400 - 200;
        let y = Math.random()*1000 - 200;
        fishN.setPosition(x,y);
        fishN.deathPro = this.arrFishDt[num].deathPro;
        fishN.birthPos = cc.v2(x,y);
        }
        else if(jilv>=8&&jilv<8.5){
            let num = this.arrFishDt.length-2;
            let fishPre = cc.resMgr.getPrefab(this.arrFishDt[num].prefab);
            let fishN = cc.instantiate(fishPre);
            fishN.parent = this.node;
            let x = Math.random()*1400 - 200;
            let y = Math.random()*1000 - 200;
            fishN.setPosition(x,y);
            fishN.deathPro = this.arrFishDt[num].deathPro;
            fishN.birthPos = cc.v2(x,y);
        }
        else{
            let num = this.arrFishDt.length-1;
            let fishPre = cc.resMgr.getPrefab(this.arrFishDt[num].prefab);
            let fishN = cc.instantiate(fishPre);
            fishN.parent = this.node;
            let x = Math.random()*1400 - 200;
            let y = Math.random()*1000 - 200;
            fishN.setPosition(x,y);
            fishN.deathPro = this.arrFishDt[num].deathPro;
            fishN.birthPos = cc.v2(x,y);
        }
     },
    start () {

    },


    // let comVec = cc.v2(0, 1);    // 水平向右的对比向量
    // let radian = dirVec.signAngle(vec);    // 求方向向量与对比向量间的弧度
    // let degree = cc.misc.radiansToDegrees(radian);    // 将弧度转换为角度

     update (dt) {
         let arrChild = this.node.getChildren();
         for(let i=0;i<arrChild.length;i++){
              let pos = arrChild[i].birthPos;
              let birthP = cc.v2(-1,0);
              let vec = (this.center.sub(pos)).normalize();
              arrChild[i].angle = -(cc.misc.radiansToDegrees(vec.signAngle(birthP)));
              arrChild[i].x += vec.x*100*dt;
              arrChild[i].y +=vec.y* 100 *dt;
              if(arrChild[i].x>1300||arrChild[i].x<-300||arrChild[i].y<-300||arrChild[i].y>850){
                  arrChild[i].removeFromParent();
              }
           //   arrChild[i].getPosition();
         }
     },
});
