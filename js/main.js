const hamBttn = document.querySelector('.menu');
const mainpage = document.querySelector('.main-page');
const header = document.querySelector('header');
const worksSection = document.querySelector('.works-section');

const blurElements = [mainpage, header, worksSection];

hamBttn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.id = 'overlay';
  document.body.appendChild(div);
  div.style.display = 'block';

  // Modify main-page css
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
});
