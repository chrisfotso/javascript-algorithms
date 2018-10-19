function LetterChanges(str) {
  let converted = str.replace(/[a-z]/gi, (char) => {
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  })
  let capitalized = converted.replace(/[aeiou]/gi, (vowel) => {
    return vowel.toUpperCase();
  })
  return capitalized;
}

LetterChanges('hello*3');
