import MiningLogic from '../MiningLogic'

//add test for getting next text data

var logic;

beforeEach(() => {
  console.log(MiningLogic);
  logic = new MiningLogic();
});

test("should get next text TextItem", () => {
  var currentTextID = logic.textData.id;
  console.log(currentTextID)
  logic.loadNextText(); 
  expect(logic.textData.id).toBe(currentTextID + 1);
})

test("should list available resources", () => {
  expect(typeof logic.resources[0].name).toBe('string');
})