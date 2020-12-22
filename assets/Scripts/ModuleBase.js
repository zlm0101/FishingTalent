cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    onInit(){
    },
    onLateInit(){
    },
    onUpdate(dt){
    },
    onLateUpdate(dt){
    },
    onRelease(){
    },


    sendMsg(moduleName, funcName, ...rest){
        cc.moduleMgr.sendMsg.apply(cc.moduleMgr, arguments);
        //cc.moduleMgr.sendMsg(moduleName, funcName, rest);
    }

    // update (dt) {},
});
