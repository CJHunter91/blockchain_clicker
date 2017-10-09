
class User {
  constructor(){
    this.coin = 0;
    this.resources = [];
    this.power = 0;
  }


  buy(resource){
    if("canAfford function"){
      this.resources.push(resource)
      this.calculatePower();
    }
  }

  calculatePower(){
    for(let resource of this.resources){
      this.power += resource.multiplier;
    }
  }
}

export default User;