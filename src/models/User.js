
class User {
  constructor(){
    this.coin = 0;
    this.resources = [];
    this.power = 0;
    this.transactions = [];
  }


  buy(resource){
    let didBuy = false;
    if(this.coin - resource.cost >= 0){
      this.resources.push(resource);
      this.transactions.push(resource);
      this.calculatePower();
      this.removeCoin(resource.cost);
      didBuy = true;
    }
    return didBuy;
  }

  removeCoin(amount){
    this.coin -= amount;
  }

  calculatePower(){
    var total = 0;
    for(let resource of this.resources){
      console.log(this.power);
      total += resource.multiplier;
    }
    this.power = Number(total.toFixed(2));
  }
}

export default User;