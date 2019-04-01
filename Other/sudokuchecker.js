const board = [
  [1,2,3,4,5,6,7,8,9],
  [5,7,8,1,3,9,6,2,4],
  [4,9,6,8,7,2,1,5,3],
  [9,5,2,3,8,1,4,6,7],
  [6,4,1,2,9,7,8,3,5],
  [3,8,7,5,6,4,2,9,1],
  [7,1,9,6,2,3,5,4,8],
  [8,6,4,9,1,5,3,7,2],
  [2,3,5,7,4,8,9,1,6]
];

function sudokuChecker(board) {
console.log([rowChecker(board), columnChecker(board), squareChecker(board)].every(result => result));

function rowChecker(sudokuBoard) {
  let boardCopy = JSON.parse(JSON.stringify(sudokuBoard));
  
  for (let row of boardCopy) {
    let numberQuantities = {};
    for (let i = 0; i < row.length; i++) {
      numberQuantities[row[i]] = numberQuantities[row[i]] + 1 || 1;
      if (numberQuantities[row[i]] > 1) return false;
    }
  }
  
  return true;
}

function columnChecker(sudokuBoard) {
  let len = sudokuBoard[0].length;
  
  for (let currCol = 0; currCol < len; currCol++) {
    let tempCol = [];
    
    for (let currRow = 0; currRow < sudokuBoard.length; currRow++) {
      let currNum = sudokuBoard[currRow][currCol];
      tempCol.push(currNum);
    }
    
    for (let i = 0; i < tempCol.length; i++) {
      let numberQuantities = {};
      numberQuantities[tempCol[i]] = numberQuantities[tempCol[i]] + 1 || 1;
      if (numberQuantities[tempCol[i]] > 1) return false;
    }
  }
  
  return true;
}

function squareChecker(sudokuBoard) {
  let square = [];
  const result = [];
  
  let currRow = 0,
      currCol = 0,
      boardLength = sudokuBoard.length,
      lastRow = sudokuBoard[boardLength-1],
      finalIndexOfRow = lastRow.length-1,
      columnBreakpoint = 3;
  
  while (currRow < boardLength || currCol < columnBreakpoint) {
    let tempRow = [];
    
    while (currCol < columnBreakpoint) {
      let currNum = sudokuBoard[currRow][currCol];
      tempRow.push(currNum);
      
      currCol++;
    }
    
    square.push(tempRow);
    
    if (square.length === 3) {
      result.push(rowChecker(square));
      result.push(columnChecker(square));
      square = [];
    }

    if (currRow === boardLength-1 && currCol > finalIndexOfRow) {
      break;
    } else if (currRow === boardLength-1) {
      columnBreakpoint += 3;
      currRow = 0;
    } else {
      currCol = columnBreakpoint-3;
      currRow++;
    }
  }
  
  return result.every(result => result);
}
}

sudokuChecker(board);