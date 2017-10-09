import User from './User';
import Block from './Block';
import Rescource from './Resource';
import textData from '../data/TextData'

class MiningLogic{

  constructor(){
    this.attemptedMines = 0;
    this.difficulty = (1*10**15  - 1);
    this.target = null;
    this.reward = 50;
    this.blocks = [];
    this.currentBlock = new Block();
    this.user = new User();
    this.textData = textData[0];
    this.pendingTransactions = [];

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
    const id = this.textData.id;
    this.textData = textData[id];
  }


}

export default MiningLogic;