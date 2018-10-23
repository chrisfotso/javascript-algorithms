let romanKeys = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

var romanToInt = function(s) {
  let split = s.split(''), result = 0;
  split.forEach((char, index) => {
    let nextChar = split[index + 1]
    switch (char + nextChar) {
      case 'CD':
      case 'CM':
        result += romanKeys[nextChar] - 100;
        deleteNextCharacter(index, split);
        break;
      case 'XL':
      case 'XC':
        result += romanKeys[nextChar] - 10;
        deleteNextCharacter(index, split);
        break;
      case 'IV':
      case 'IX':
        result += romanKeys[nextChar] - 1;
        deleteNextCharacter(index, split);
        break;
      default:
        result += romanKeys[char];
        break;
    }
  })
  return result;
};

var deleteNextCharacter = function(index, array) {
  array.splice(index + 1, 1);
}

romanToInt('LVIII');
