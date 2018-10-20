//Complete the function scramble(str1, str2) that returns true if a portion of
//str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  let result = '';
  for (let i = 0; i < str2.length; i++) {
    let index = str1.indexOf(str2[i]);
    let letter = str1[index];
    if (index >= 0) {
      result += letter;
      str1 = str1.slice(0, index) + str1.slice(index + 1);
    } else break;
  }
  return result === str2;
} 
