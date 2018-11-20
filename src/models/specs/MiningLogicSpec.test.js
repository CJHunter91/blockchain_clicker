import MiningLogic from '../MiningLogic'

//add test for getting next text data

var logic;

beforeEach(() => {
  logic = new MiningLogic();
});

test("should get next text TextItem", () => {
  var currentTextID = logic.currentTextData.id;
  logic.loadNextText(); 
  expect(logic.currentTextData.id).toBe(currentTextID + 1);
})

test("should loop text to second [1] text item", () => {
  var currentTextID = logic.currentTextData.id;
  logic.loadNextText(); 
  expect(logic.currentTextData.id).toBe(currentTextID + 1);
})

test("should list available resources", () => {
  expect(typeof logic.resources[0].name).toBe('string');
})