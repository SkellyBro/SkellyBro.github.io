const star = document.querySelector('.starclick');
const academic = document.querySelector('.clicked');

academic.style.display = 'none';

star.addEventListener('click', function () {
  if (academic.style.display === 'none') {
    academic.style.display = 'block';
    star.classList.add('roll');
  } else {
    academic.style.display = 'none';
    star.classList.remove('roll');
  }
});
