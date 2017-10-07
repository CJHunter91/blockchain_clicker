
class Block {

  constructor(){
    this.number = 1;
    this.prevHash = '000000'
    this.hash = null;
    this.transactions = []
    this.nonce = 0;
  }

}

export default Block;