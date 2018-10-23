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
    switch (char + split[index + 1]) {
      case 'CD':
        result += 400;
        deleteNextCharacter(index, split);
        break;
      case 'CM':
        result += 900;
        deleteNextCharacter(index, split);
        break;
      case 'XL':
        result += 40;
        deleteNextCharacter(index, split);
        break;
      case 'XC':
        result += 90;
        deleteNextCharacter(index, split);
        break;
      case 'IV':
        result += 4;
        deleteNextCharacter(index, split);
        break;
      case 'IX':
        result += 9;
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
