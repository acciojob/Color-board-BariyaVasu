const container = document.getElementById('container');
const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#16a085', '#f39c12', '#2ecc71'];

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;

    setTimeout(() => {
      square.style.backgroundColor = '#222';
    }, 1000); // revert after 1 second
  });

  container.appendChild(square);
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
