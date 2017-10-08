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
    this.text = textData[0].text;
    this.pendingTransactions = [];

    console.log(this.difficulty);
    console.log(this.currentBlock.hash)
    console.log(this.currentBlock.hash < this.difficulty)
  }

  rewardUser(){
    if(this.currentBlock.hash < this.difficulty){
        this.user.coin += this.reward;
        return true;
    }
  }

  loadNextBlock(){
    const prevHash = this.currentBlock.hash;
    this.currentBlock = new Block(prevHash, this.pendingTransactions);

  }


}

export default MiningLogic;