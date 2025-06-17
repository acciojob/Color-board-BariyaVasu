const container = document.getElementById('container');

// Create 100 squares (10x10)
for (let i = 0; i < 100; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Hover effect
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = '#652BCD';
  });

  // Revert after 1 second
  square.addEventListener('mouseleave', () => {
    setTimeout(() => {
      square.style.backgroundColor = '#2B2B2B';
    }, 1000);
  });

  container.appendChild(square);
}
