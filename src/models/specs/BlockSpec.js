var assert = require('assert');
var Block = require('../Block')

  describe('Block Testing', function() {

    var block;

    beforeEach(function(){
      block = new Block();
    })

    it('should increase nonce by 1', function() {
      var nonce = block.nonce;
      block.addToNonce();
      assert.equal(block.nonce, nonce + 1);
  });
});