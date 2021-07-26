const div = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const mainpage = document.querySelector('.main-page');
const header = document.querySelector('header');
const worksSection = document.querySelector('.works-section');
const blurElements = [mainpage, header, worksSection];

hamBttn.addEventListener('click', function() {
  // Create div for mobile menu
  div.id = 'overlay';
  div.innerHTML = 
  '<img src="/Images/cancel.png" class="cancelBttn"></img>'+
  '<ul class="mobile-menu-ul">'+
    '<li class="mobile-menu-li" id="1">Porfolio</li>'+
    '<li class="mobile-menu-li" id="2">About</li>'+
    '<li class="mobile-menu-li" id="3">Contact</li>'+
  '</ul>';
  document.body.appendChild(div);
  div.style.display = 'block';
  // Add css class to behind sections
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
  // Add listener for closing menu
  const mobileMenu = document.querySelector(".cancelBttn");
  mobileMenu.addEventListener('click', function(){
    div.remove();
    UnBlurSections();
  })
  // Adding listeners to li tags
  const sections = document.querySelectorAll(".mobile-menu-li");
  for (i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', function(event){
      div.remove();
      UnBlurSections();
      window.location.hash = "section-"+event.target.id;
    });
  }
})

function UnBlurSections(){
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
}




