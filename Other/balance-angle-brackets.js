//Given a string of left (<) and right (>) angle brackets, return a new string with correctly balanced brackets
//Example input: '><<><'
//Expected output: '<><<><>>'

const balanceAngleBrackets = angles => {
  const angleArr = angles.split("");
  let leftStack = [],
    rightStack = [];

  for (let i = 0; i < angleArr.length; i++) {
    const currBrack = angleArr[i];
    if (currBrack === "<") {
      leftStack.push(currBrack);
    } else if (leftStack.length) {
      leftStack.pop();
    } else rightStack.push(">");
  }

  leftStack.forEach(leftBrack => angleArr.push(">"));
  rightStack.forEach(rightBrack => angleArr.unshift("<"));

  return angleArr.join("");
};
