import User from '../User';

var user;

beforeEach(() => {
  user = new User();
  user.coin = 10;
});

test('should buy resource', () => {
  var res = { 
  name: "Cpu",
  cost: 1, 
  multiplier: 1.2
}
  user.buy(res)
  expect(user.resources.length).toBe(1);
});