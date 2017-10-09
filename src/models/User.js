
class User {
  constructor(){
    this.coin = 0;
    this.resources = [];
    this.power = 0;
  }


  buy(resource){
    let didBuy = false;
    if(this.coin >= resource.cost){
      this.resources.push(resource)
      this.calculatePower();
      didBuy = true;
    }
    return didBuy;
  }

  calculatePower(){
    var total = 0
    for(let resource of this.resources){
      console.log(this.power)
      total += resource.multiplier;
    }
    this.power = Number(total.toFixed(2));
  }
}

export default User;