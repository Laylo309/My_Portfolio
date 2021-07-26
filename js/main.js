let hamBttn = document.querySelector('.menu');
let mainpage = document.querySelector('.main-page');
let header = document.querySelector('header');
let worksSection = document.querySelector('.works-section');

var blurElements = [mainpage, header, worksSection];

hamBttn.addEventListener('click', function(){
  let div = document.createElement('div');
  div.id = 'overlay';
  document.body.appendChild(div);
  div.style.display = "block";

  // Modify main-page css
  for(let i = 0; i < blurElements.length; i++){
    blurElements[i].classList.add('blur-content');
  }
})


