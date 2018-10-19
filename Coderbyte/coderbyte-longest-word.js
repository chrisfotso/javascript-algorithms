function LongestWord(sen) {
      let longestWord = '', tempWord = '';
      for (let i = 0; i < sen.length; i++) {
        let letter = sen[i];
        if (/\w/.test(letter)) {
          tempWord += letter;
        } else {
          tempWord = '';
        }
        if (tempWord.length > longestWord.length) {
          longestWord = tempWord;
        }
      }
      return longestWord;
}

LongestWord('I love dogs');
