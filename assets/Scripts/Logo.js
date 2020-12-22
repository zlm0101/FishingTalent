
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:
     onLoad () {
        this.anims = this.getComponent(cc.Animation);
        this.anims.on('finished',()=>{
            cc.director.loadScene('Menu');
        },this);
        this.anims.play('fadeOut');
     },

    start () {

    },
    // update (dt) {},
});
