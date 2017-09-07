export class Haiku {
  constructor(line1, line2, line3)
  {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkLines(){
    if(this.line1.length > 0 && this.line2.length > 0 && this.line3.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  countVowels(word){
    let vowelCount = 0;
    const vowels = ["A", "E", "I", "O", "U"];
    const wordArray = word.split('');
    for(let i = 0; i < wordArray.length; i++) {
      if (vowels.includes(wordArray[i].toUpperCase())) {
        vowelCount += 1;
      }
    }
    return vowelCount;
  }

  countSilentEs(word){
    let silentEsCount = 0;
    if (word[word.length-1].toUpperCase() === "E" && (word.length > 3 || this.countVowels(word) === 2)){
      silentEsCount += 1;
    }
    return silentEsCount;
  }

  countVowelPairs(word){
    let vowelPairCount = 0;
    const vowels = ["A", "E", "I", "O", "U"];
    const wordArray = word.split('');
    for(let i = 0; i < wordArray.length-1; i++) {
      if (vowels.includes(wordArray[i].toUpperCase()) && vowels.includes(wordArray[i+1].toUpperCase())){ //if letter is a vowel
        vowelPairCount++;
      }
    }
    return vowelPairCount;
  }

  countSyllablesInWord(word){
    return this.countVowels(word) - this.countSilentEs(word) - this.countVowelPairs(word);
  }

  countSyllablesInLine(line){
    let syllableCount = 0;
    const wordArray = line.split(" ");
    for(let i = 0; i < wordArray.length; i++) {
    syllableCount += this.countSyllablesInWord(wordArray[i]);
    }
    return syllableCount;
  }

  checkHaiku(){
    if (this.countSyllablesInLine(this.line1) === 5 && this.countSyllablesInLine(this.line2) === 7 && this.countSyllablesInLine(this.line3) === 5) {

      return true;
    } else {
      return false;
    }
  }
}
