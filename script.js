  const board = document.getElementById('board');
  const boxCount = 800;

  const colors = ['#e63946', '#f1fa8c', '#43aa8b', '#577590', '#9b5de5', '#f15bb5', '#ff9f1c', '#38bdf8'];

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    // Hover in
    box.addEventListener('mouseenter', () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = randomColor;
    });

    // Hover out (optional: fade back to dark)
    box.addEventListener('mouseleave', () => {
      setTimeout(() => {
        box.style.backgroundColor = '#222';
      }, 200);
    });

    board.appendChild(box);
  }
