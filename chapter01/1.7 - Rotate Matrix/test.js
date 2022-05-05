function rotateMatrix(matrix) {
  let rows = matrix.length - 1;

  for (let layer = 0; layer < rows / 2; layer++) {
    let first = layer;
    let last = rows - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;
      let top  = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top; // right <- saved top;
    }
  }

  return true;
}
