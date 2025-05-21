const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);  // escala para o tamanho dos blocos

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = 'red';
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

const matrix = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const position = { x: 5, y: 5 };

drawMatrix(matrix, position);
