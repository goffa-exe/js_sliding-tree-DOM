'use strict';

document.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  if (span.nextElementSibling.style.display === 'none') {
    span.nextElementSibling.style.display = '';
  } else {
    span.nextElementSibling.style.display = 'none';
  }
});
