class LevelMgr{
    constructor(){
        this.LevelID = 0;
    }

    setLevelID(LevelID){
        this.LevelID = LevelID;
    }

    getLevelDt(LevelID){
        LevelID = (LevelID || this.LevelID);
       return cc.configMgr.getConfig('LevelDt').getDataByID(LevelID);
    }
}
module.exports = LevelMgr;