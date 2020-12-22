class ConfigMgr{
    constructor(){
        this.mapDt = new Map();
    }

    addConfig(key,config){
        if(!key||typeof(key) !== 'string'||!config){
            return;
        }
        this.mapDt.set(key,config);
    }

    removeConfig(key){
        if(!key||typeof(key) !== 'string'){
            return;
        }
        this.mapDt.delete(key);
    }

    getConfig(key){
        if(!key||typeof(key) !== 'string'){
            return;
        }
        return this.mapDt.get(key);
    }
}
module.exports = ConfigMgr;