import User from './User';
import Block from './Block';
import Resource from './Resource';
import textData from '../data/TextData';
import resourceData from '../data/ResourceData';

class MiningLogic{

  constructor(){
    this.difficulty = (10**15  - 1);
    this.target = null;
    this.reward = 50;
    this.user = new User();
    this.currentTextData = textData[0];
    this.pendingTransactions = [];
    this.resources = [];
    this.mining = false;
    this.time = 500;
    this.currentBlock = new Block(this.difficulty);

    this.loadResourceData();

    console.log(this.difficulty);
    console.log(this.currentBlock.hash)
    console.log(this.currentBlock.hash < this.difficulty)
  }

  rewardUser(){
    if(this.checkValidated()){
      this.user.coin += this.reward;
      this.pendingTransactions.unshift("User Awarded: " + this.reward + " coins")
      this.difficulty -= this.difficulty * 0.2;
      const coin = document.querySelector('#coin');
      coin.classList.add('coin')
      setTimeout(()=>{
        coin.classList.remove("coin");
      }, 2100)
      return true;
    }
  }

  checkValidated(){
    if(this.currentBlock.hash < this.currentBlock.difficulty){
      const block = document.querySelector('#block-view');
      block.classList.add("block-colour");
      setTimeout(()=>{
        block.classList.remove("block-colour");
      }, 2100)
      this.mining = false;
      return true;
    }
  }

  processUserTransactions(){
    for(let trans of this.user.transactions){
      const string = `User buys: ${trans.name}(${trans.cost}) from Shop`
      this.pendingTransactions.push(string);
      this.difficulty += this.difficulty * (trans.multiplier/100)

    }
  }

  loadNextBlock(){
    const prevHash = this.currentBlock.hash;
    this.currentBlock = new Block(this.difficulty, prevHash, this.pendingTransactions);
    this.user.transactions = [];
    this.pendingTransactions = [];
  }

  loadNextText(){
    const id = this.currentTextData.id;
    if(textData.length === this.currentTextData.id){
      this.currentTextData = textData[1];
    }
    else{
      this.currentTextData = textData[id];
    }
  }

  mineBlock(button, stateCallback){
    this.mining = true;
    this.increment(button, stateCallback)
    if(this.user.power > 0 && this.currentBlock.nonce ===1){
      this.mining = true;
      const interval = setInterval(() => { this.increment(button,stateCallback, interval) }, this.time - this.user.power);
    }
  }

  increment(button, stateCallback, interval){
    if(this.checkValidated()){
      clearInterval(interval); 
      this.rewardUser();
      this.loadNextBlock()
      this.loadNextText();
      button.disabled = true;
      setTimeout(() => { button.disabled = false }, 1000);   
    }
    else if(!this.mining){
      clearInterval(interval); 
    }
    else{
      this.currentBlock.addToNonce();
    }
    stateCallback()
  }

  loadResourceData(){
    for(let resource of resourceData){
      const newRescource = new Resource(resource.name, resource.cost, resource.multiplier)
      this.resources.push(newRescource);
    }
  }


}

export default MiningLogic;