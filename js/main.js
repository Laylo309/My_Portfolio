// Mobile Menu
const div = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const header = document.querySelector('header');
const mainpage = document.querySelector('.main-page');
const worksSection = document.querySelector('.works-section');
const aboutMe = document.querySelector('.about');
const lastPage = document.querySelector('.last-page');
const blurElements = [mainpage, header, worksSection, aboutMe, lastPage];

// Projects popup
const popupDivBG = document.createElement('div');
const popupDiv = document.createElement('div');
const projectBttns = document.querySelectorAll('.popup');

function addEventListenerList() {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', () => {
      console.log("test");
      popupDiv.id = 'overlay-popup';
      popupDivBG.id = 'overlay-popup-bg';
      document.body.appendChild(popupDiv);
      document.body.appendChild(popupDivBG);
      popupDivBG.style.display = 'block !important';
      popupDiv.style.display = 'block !important';
      BlurSections();
    });
  }
}

function UnBlurSections() {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
}

function BlurSections(){
  // Add css class to behind sections
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
}

hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div.innerHTML = '<img src="./Images/cancel.png" class="cancelBttn"></img>'
    + '<ul class="mobile-menu-ul">'
    + '<li class="mobile-menu-li" id="1">Porfolio</li>'
    + '<li class="mobile-menu-li" id="2">About</li>'
    + '<li class="mobile-menu-li" id="3">Contact</li>'
    + '</ul>';
  document.body.appendChild(div);
  div.style.display = 'block';
  BlurSections();
  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    UnBlurSections();
  });
  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', (event) => {
      div.remove();
      UnBlurSections();
      window.location.hash = `section-${event.target.id}`;
    });
  }
});

addEventListenerList();

form.addEventListener('submit', (event) => {
  const emailSubmit = form.elements.user_email;
  const validEmail = validateEmail(emailSubmit, emailForm);
  if (validEmail) {
    errorMessage();
  }
  event.preventDefault();
});