let ModuleBase = require('ModuleBase');
cc.Class({
    extends: ModuleBase,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let levelDt = cc.levelMgr.getLevelDt();
        let bgSprite = this.getComponent(cc.Sprite);
        bgSprite.spriteFrame = cc.resMgr.getSpriteFrame(levelDt.mapName);
    },

    // update (dt) {},
});
