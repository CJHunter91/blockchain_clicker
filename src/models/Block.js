var sha256 = require('sha256');
var converter = require('hex2dec');

class Block {


  constructor(difficulty, prevHash = "0000000000000000", transactions = []){
    this.number = Block.incrementNumber();
    this.prevHash = prevHash
    this.hash = null;
    this.transactions = transactions;
    this.nonce = 0;
    this.difficulty = difficulty;
    this.attributes = [this.hash, this.prevHash, this.difficulty]
    this.convertToHash();
    this.processAttributes();
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
    this.attributes[0] = this.hash;
  }

  addToNonce(){
    this.nonce++
    this.convertToHash()
    this.attributes[0] = this.hash;
    this.processAttributes();
  }

  processAttributes(){
    const processedAttributes = this.attributes.map((attribute) => {
      var number = Math.round(parseInt(attribute));
      console.log(number.toString())
      if(number.toString().length < 18){
        let arr = number.toString().split('');
        console.log(arr);
        while(arr.length < 16){
          arr.unshift("0")
        }
        console.log(arr.join('').toString());
        return arr.join('').toString(); 
      }

    })
    this.attributes = processedAttributes;
    console.log(processedAttributes)
  }

}

export default Block;