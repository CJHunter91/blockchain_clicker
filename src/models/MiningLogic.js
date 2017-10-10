import User from './User';
import Block from './Block';
import Resource from './Resource';
import textData from '../data/TextData';
import resourceData from '../data/ResourceData';

class MiningLogic{

  constructor(){
    this.attemptedMines = 0;
    this.difficulty = (10**15  - 1);
    this.target = null;
    this.reward = 50;
    this.blocks = [];
    this.currentBlock = new Block();
    this.user = new User();
    this.currentTextData = textData[0];
    this.pendingTransactions = [];
    this.resources = [];

    this.loadResourceData();

    console.log(this.difficulty);
    console.log(this.currentBlock.hash)
    console.log(this.currentBlock.hash < this.difficulty)
  }

  rewardUser(){
    if(this.currentBlock.hash < this.difficulty){
      this.user.coin += this.reward;
      this.pendingTransactions.unshift("User Awarded: " + this.reward + " coins")
      return true;
    }
  }

  loadNextBlock(){
    const prevHash = this.currentBlock.hash;
    this.currentBlock = new Block(prevHash, this.pendingTransactions);

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

  loadResourceData(){
    for(let resource of resourceData){
      const newRescource = new Resource(resource.name, resource.cost, resource.multiplier)
      this.resources.push(newRescource);
    }
  }


}

export default MiningLogic;