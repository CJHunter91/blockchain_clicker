var assert = require('assert');
var Block = require('../Block')

test('should increase nonce by 1', function() {
  var block = new Block();
  var nonce = block.nonce;
  block.addToNonce();
  assert.equal(block.nonce, nonce + 1);
});