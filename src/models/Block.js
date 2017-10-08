var sha256 = require('sha256');
var converter = require('hex2dec');

class Block {


  constructor(prevHash = "0000000000000000", transactions = []){
    this.number = Block.incrementNumber();
    this.prevHash = prevHash
    this.hash = null;
    this.transactions = transactions
    this.nonce = 0;
    this.convertToHash();
  }

  static incrementNumber() {
    if (!this.number) this.number = 1
    else this.number++
    return this.number
  }

  convertToHash(){
    const concat = this.number.toString() 
    + this.prevHash.toString() 
    + this.transactions.toString() 
    + this.nonce.toString();
    const decimal = converter.hexToDec(sha256(concat))
    this.hash = decimal / (10 ** (77 - 16))
  }

  addToNonce(){
    this.nonce++
    this.convertToHash()
  }

}

module.exports = Block;