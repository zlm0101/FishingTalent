

cc.Class({
    extends: cc.Component,

    properties: {
       LevelSel:cc.Node,
       paopaoPre:cc.Prefab,
       bgN:cc.Node,
       speedX:0,
       speedY:0
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.anims = this.getComponent(cc.Animation);
        this.anims.play('fadeIn');
        this.LevelSel.on('click',()=>{
           cc.director.loadScene('LevelSel')
        },this);
        this.schedule(this.createPaopao1,0.3);
        this.schedule(this.createPaopao2,0.3);
     },

    start () {

    },

    createPaopao1(){
        let paopao = cc.instantiate(this.paopaoPre);
        paopao.parent = this.node;
        paopao.x = -(Math.random()*80 +380);
        paopao.y = -150;
    },
    createPaopao2(){
      let paopao = cc.instantiate(this.paopaoPre);
      paopao.parent = this.node;
      paopao.x = (Math.random()*80 +380);
      paopao.y = -150;
  },
     update (dt) {
        let arrChild = this.node.getChildren();
        for(let i=0;i<arrChild.length;i++){
         if(arrChild[i].name === 'paopao'){
            arrChild[i].y += this.speedY * dt;
            let num = Math.random()*10;
            if(num <= 4){
               arrChild[i].x += this.speedX * dt;
            }
            else {
               arrChild[i].x -= this.speedX * dt;
            }
//            arrChild[i].x += this.speedX * dt;
            if(arrChild[i].y >50 ){
               arrChild[i].removeFromParent();
            }
         }
        }
     },
});
