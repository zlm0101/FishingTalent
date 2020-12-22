class ModuleMgr{
    constructor(){
        this.mapModule = new Map();
    }

    onInit(){
        for(let myModule of this.mapModule.values()){
            if (myModule&&myModule.onInit) {
                myModule.onInit();
            }
        }
    }
    onLateInit(){
        for(let myModule of this.mapModule.values()){
            if (myModule&&myModule.onLateInit) {
                myModule.onLateInit();
            }
        }
    }
    onUpdate(dt){
        for(let myModule of this.mapModule.values()){
            if (myModule&&myModule.onUpdate) {
                myModule.onUpdate(dt);
            }
        }
    }
    onLateUpdate(dt){
        for(let myModule of this.mapModule.values()){
            if (myModule&&myModule.onLateUpdate) {
                myModule.onLateUpdate(dt);
            }
        }
    }
    onRelease(){
        for(let myModule of this.mapModule.values()){
            if (myModule&&myModule.onRelease) {
                myModule.onRelease();
            }
        }
    }

    registerModule(key, module){
        if (!key || typeof(key) !== 'string' || !module) {
            return;
        }
        this.mapModule.set(key, module);
    }

    unregisterModule(key){
        if (!key || typeof(key) !== 'string') {
            return;
        }
        this.mapModule.delete(key);
    }

    getModule(key){
        if (!key || typeof(key) !== 'string') {
            return;
        }
        return this.mapModule.get(key);
    }

    onDestroy(){
        this.mapModule.clear();
    }

    sendMsg(moduleName, funcName){
        //arguments
        let params = [].slice.call(arguments, 2);
        let myModule = this.mapModule.get(moduleName);
        if (!myModule) {
            return;
        }
        let func = myModule[funcName];
        if (func) {
            //func.call(myModule, params);
            func.apply(myModule, params)
        }
    }
}

module.exports = ModuleMgr;