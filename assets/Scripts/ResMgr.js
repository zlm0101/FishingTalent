class ResMgr{
    constructor(){
        this.allCache = {
            spriteFrame:new Map(),
            prefab:new Map(),
            atlas:new Map()
        }
    }

    addData(type,key,data){
        if(!type || typeof(type) !== 'string' || !key || typeof(key) !== 'string'|| !data){
            return;
        }
        let cache = this.allCache[type];
        cache.set(key,data);
    }

    getData(type,key){
        if(!type || typeof(type) !== 'string' || !key|| typeof(key) !== 'string'){
            return;
        }
        let cache = this.allCache[type];
        return cache.get(key);
    }


    getSpriteFrame(key,atlasName){
        let spriteFrame = this.getData('spriteFrame',key);
        if (spriteFrame) {
            return spriteFrame;
        }
        if(atlasName && typeof(atlasName) === 'string'){
            let atlas = this.allCache.atlas[atlasName];
            if(!atlas){
                return null;
            }
            spriteFrame = atlas.getSpriteFrame(key);
            if (spriteFrame) {
                return spriteFrame;
            }
        }
        let arrAtlas = this.allCache.atlas.values();
        for(let atlas of arrAtlas){
            spriteFrame = atlas.getSpriteFrame(key);
            if (spriteFrame) {
                return spriteFrame;
            }
        }
        return null;
     }
    getPrefab(key){
        return this.getData('prefab',key);
    }
}

module.exports = ResMgr;