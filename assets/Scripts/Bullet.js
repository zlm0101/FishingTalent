// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {},
    init(config,angle,vec,probability){
        this.config = config;
        this.node.angle = angle;
        this.vec = vec;
        this.probability = probability;
        this.anims = this.node.getComponent(cc.Animation);
    },
    

    // move(){
    //     cc.tween(this.node)
    //     .by(3,{position:cc.v2(0, cc.winSize.height + 100)})
    //     .removeSelf()
    //     .start();
    // },

    start () {

    },

    onCollisionEnter(other, self){
        let num = Math.random()*101;
        
        this.vec = cc.v2(0,0);
        this.anims.on('finished',()=>{
            this.node.removeFromParent();
        },this);
         this.anims.play();

         let deathPro = Math.floor(Math.random()*101);
         let death = other.node.deathPro * this.probability;
         if(deathPro < death){
             other.node.removeFromParent();
         }

    },


     update (dt) {
         this.node.x += this.vec.x * this.config.speed * dt;
         this.node.y += this.vec.y * this.config.speed * dt;
         if(this.node.x<-668||this.node.x>cc.winSize.width+100||this.node.y>cc.winSize.height+100){
             this.node.removeFromParent();
         }
     },
});
