let ConfigMgr = require('ConfigMgr');
let ConfigDt = require('ConfigDt');
let ResMgr = require('ResMgr');
cc.Class({
    extends: cc.Component,

    properties: {
       progressBar:cc.ProgressBar
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         cc.configMgr = new ConfigMgr();
         cc.resMgr = new ResMgr();

         cc.loader.loadResDir('./',(finishCount,totalCount,item)=>{
            this.progressBar.progress = finishCount/totalCount;
        },
        (err,assets)=>{
            if(err){
                return;
            }
            for(let i = 0;i<assets.length;i++){
                let asset = assets[i];
                if(asset instanceof cc.JsonAsset){
                   let configDt = new ConfigDt(asset.json);
                   cc.configMgr.addConfig(asset.name,configDt);
                }
                else if(asset instanceof cc.Prefab){
                   cc.resMgr.addData('prefab',asset.name,asset);
                }
                else if(asset instanceof cc.SpriteFrame){
                   cc.resMgr.addData('spriteFrame',asset.name,asset);
                }
                else if(asset instanceof cc.SpriteAtlas){
                    let arrStr = asset.name.split('.');
                    cc.resMgr.addData('atlas',arrStr[0],asset);
                }
            }
            let gamePrefab = cc.resMgr.getPrefab('GameN');
            let gameN = cc.instantiate(gamePrefab);
            gameN.parent = cc.director.getScene();
            // let fishPrefab = cc.resMgr.getPrefab('GameN');
            // let gameN = cc.instantiate(gamePrefab);
            // gameN.parent = cc.director.getScene();
         //   this.node.OnDestroy();
        });
     },

    start () {

    },

    // update (dt) {},
});
