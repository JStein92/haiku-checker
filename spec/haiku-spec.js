import {Haiku} from './../js/haiku.js';

describe('Haiku',function(){

  let newHaiku;

  beforeEach(function(){
    let line1 = "This class is the best";
    let line2 = "We are learning about code";
    let line3 = "Yay for programming";
    newHaiku = new Haiku(line1,line2,line3);
  });

  it('should have 3 lines', function(){
    const lineCheck = newHaiku.checkLines();
    expect(lineCheck).toEqual(true);
  });

  it('should count the vowels in a word', function(){
    const word = "Epicodus";
    let numberOfVowels = newHaiku.countVowels(word);
    expect(numberOfVowels).toEqual(4);
  });

  it('should count the last letter of a word is "e"', function(){
    const word = "there";
    let numberOfSilentVowels = newHaiku.countSilentEs(word);
    expect(numberOfSilentVowels).toEqual(1);
  });

  it('should count vowel pairs', function(){
    const word = "beautiful";
    let numberOfVowelPairs = newHaiku.countVowelPairs(word);
    expect(numberOfVowelPairs).toEqual(2);
  });

  it('should count syllables in a word', function(){
    const word = "are";
    let numberOfSyllables = newHaiku.countSyllablesInWord(word);
    expect(numberOfSyllables).toEqual(1);
  });

  it('should count syllables in a line', function(){
    const line1 = newHaiku.line1;
    let numberOfSyllables = newHaiku.countSyllablesInLine(line1);
    expect(numberOfSyllables).toEqual(5);
  });

  it('should check if Haiku is valid', function(){
    const isHaiku = newHaiku.checkHaiku();

    // console.log("FIRST LINE: " + newHaiku.countSyllablesInLine(newHaiku.line1));
    // console.log("SECOND LINE: " + newHaiku.countSyllablesInLine(newHaiku.line2));
    // console.log("THIRD LINE: " + newHaiku.countSyllablesInLine(newHaiku.line3));

    expect(isHaiku).toEqual(true);
  });
});
