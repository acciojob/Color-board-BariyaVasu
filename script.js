const grid = document.getElementById('grid');
const totalCols = 40;
const totalRows = 20;
const colors = ['#e63946', '#f1fa8c', '#43aa8b', '#577590', '#9b5de5', '#f15bb5', '#ff9f1c'];

for (let i = 0; i < totalCols * totalRows; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}

function animateGrid() {
  const cells = document.querySelectorAll('.cell');

  setInterval(() => {
    // Reset all cells to default
    cells.forEach(cell => cell.style.backgroundColor = '#222');

    // Light up a few random cells
    for (let i = 0; i < 30; i++) {
      const index = Math.floor(Math.random() * cells.length);
      const color = colors[Math.floor(Math.random() * colors.length)];
      cells[index].style.backgroundColor = color;
    }
  }, 300);
}

animateGrid();
