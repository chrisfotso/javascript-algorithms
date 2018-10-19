function LetterCapitalize(str) {
  let strArr = str.toLowerCase().split(' ');
  strArr.forEach((word, index, arr) => {
      word = word.slice(0, 1).toUpperCase() + word.slice(1);
      arr[index] = word;
    })
  console.log(strArr.join(' '));
}

LetterCapitalize('hello world');
