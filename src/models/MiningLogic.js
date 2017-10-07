import User from './User';
import Block from './Block';
import Rescource from './Resource';
class MiningLogic{

  constructor(){
    this.attemptedMines = 0;
    this.difficulty = null;
    this.target = null;
    this.reward = null;
    this.blocks = [];
    this.currentBlock = new Block();
    this.user = new User();

  }

}

export default MiningLogic;