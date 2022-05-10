// my solution

function setZeros() {
  const count = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        count[i] = (count[i] || []);
        count[i].push(j)
      };
    }
  }

  for (const row in count) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < count[row].length; j++) {
        matrix[i][count[row][j]] = 0;
      }
    }
    
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
};

//

function nullifyRow(matrix, row) {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

function nullifyColumn(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

function setZeros(matrix) {
  let rowHasZero = false;
  let colHasZero = false;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      nullifyColumn(matrix, j);
    }
  }

  if (rowHasZero){
    nullifyRow(matrix, 0);
  }

  if (colHasZero) {
    nullifyColumn(matrix, 0);
  }
}


//


function setZeros() {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        if (row === 0) firstRowHasZero = true;
        if (col === 0) firstColHasZero = true;

        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    matrix[0].fill(0);
  }

  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}
