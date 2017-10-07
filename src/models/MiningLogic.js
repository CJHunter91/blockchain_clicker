import User from './User';
import Block from './Block';
import Rescource from './Resource';
import textData from '../data/TextData'

class MiningLogic{

  constructor(){
    this.attemptedMines = 0;
    this.difficulty = null;
    this.target = null;
    this.reward = null;
    this.blocks = [];
    this.currentBlock = new Block();
    this.user = new User();
    this.text = textData[0].text;
  }


}

export default MiningLogic;