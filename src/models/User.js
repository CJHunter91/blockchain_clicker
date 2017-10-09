
class User {
  constructor(){
    this.coin = 0;
    this.resources = [];
    this.power = 0;
  }


  buy(resource){
    if("canAfford function"){
      this.resources.push(resource)
    }
  }
}

export default User;