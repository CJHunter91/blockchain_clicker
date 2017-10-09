import Block from '../Block';

var block;

beforeEach(() => {
  block = new Block();
});

test('should increase nonce by 1', function() {
  var nonce = block.nonce;
  block.addToNonce();
  expect(block.nonce).toBe(nonce + 1);
});