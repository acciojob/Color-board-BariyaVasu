//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = '#652BCD';
  });

  square.addEventListener('mouseleave', () => {
    setTimeout(() => {
      square.style.backgroundColor = '#2B2B2B';
    }, 1000); // Revert after 1 second
  });
});
