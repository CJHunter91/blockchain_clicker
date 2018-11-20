import MiningLogic from '../MiningLogic'
import textData from '../../data/TextData';

//add test for getting next text data

var logic;

beforeEach(() => {
  logic = new MiningLogic();
});

test("should get next text TextItem", () => {
  var currentIndex = logic.currentTextDataIndex;
  logic.loadNextText(); 
  expect(logic.currentTextDataIndex).toBe(currentIndex + 1);
})

test("should loop text to second text item after looping through all text", () => {
  logic.currentTextData= textData[textData.length - 1];
  logic.currentTextDataIndex = textData.length - 1;
  logic.loadNextText(); 
  expect(logic.currentTextDataIndex).toBe(1);
})

test("should list available resources", () => {
  expect(typeof logic.resources[0].name).toBe('string');
})