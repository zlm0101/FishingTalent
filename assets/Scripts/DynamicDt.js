class DynamicDt{
    static instance = null;
    constructor(){
        this.CoinNum = 300;
        this.TowerGrade = 1;
        this.GradeName= 2001;
    }
    static getInstance(){
        if(!DynamicDt.instance){
            DynamicDt.instance = new DynamicDt();
        }
        return DynamicDt.instance;
    }
    setCoinNum(num){    
        this.CoinNum = num;
    }
    getCoinNum(){
        return this.CoinNum;
    }

    setGrade(towerGrade){
        this.TowerGrade = towerGrade;
    }

    getGrade(){
        return this.TowerGrade;
    }
    setGradeName(GradeName){    
        this.GradeName = GradeName;
    }
    getGradeName(){
        return this.GradeName;
    }

}
module.exports = DynamicDt;