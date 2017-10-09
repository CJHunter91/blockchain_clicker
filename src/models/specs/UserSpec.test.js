import User from '../User';

var user;
var res;

beforeEach(() => {
  user = new User();
  user.coin = 10;
    res = { 
    name: "Cpu",
    cost: 1, 
    multiplier: 1.2
  }
});

test('should buy resource', () => {
  user.buy(res)
  expect(user.resources.length).toBe(1);
});

test('should calculate power', () => {
    user.buy(res)
    expect(user.power).toBe(1.2);
});

test('should check cant afford resource', () => {
  user.coin = 0;
  user.buy(res);
  expect(user.resources.length).toBe(0);
})