var sha256 = require('sha256');
var converter = require('hex2dec');

class Block {

  constructor(){
    this.number = 1;
    this.prevHash = "0000000000000000"
    this.hash = null;
    this.transactions = []
    this.nonce = 0;
    this.convertToHash();
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

export default Block;