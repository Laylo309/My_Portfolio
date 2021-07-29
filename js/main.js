// Mobile Menu
const div = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const header = document.querySelector('header');
const mainpage = document.querySelector('.main-page');
const worksSection = document.querySelector('.works-section');
const aboutMe = document.querySelector('.about');
const lastPage = document.querySelector('.last-page');
const blurElements = [mainpage, header, worksSection, aboutMe, lastPage];

// Mobile Menu
function UnBlurSections() {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
}

function BlurSections() {
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
  document.querySelector('body').style.overflow = 'hidden';
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

// Projects popup
const popupDivBG = document.createElement('div');
const popupDiv = document.createElement('div');
const projectBttns = document.querySelectorAll('.popup');
const projectDiv = document.createElement('div');
const myProjects = [{
  name: 'Tonic',
  imgUrl: './Images/pages/SnapshootPortfolio.png',
  techs: ['html', 'css', 'ruby'],
  description: 'A daily selection of privately personalized reads; no accounts or'
  + 'sign-ups required.',
  button: 'See Project',
},
{
  name: 'Multi-post Stories',
  imgUrl: './Images/pages/SnapshootPortfolio1.png',
  techs: ['html', 'css', 'ruby'],
  description: 'A daily selection of privately personalized reads; no accounts or'
  + 'sign-ups required.',
  button: 'See Project',
},
{
  name: 'Tonic',
  imgUrl: './Images/pages/SnapshootPortfolio2.png',
  techs: ['html', 'css', 'ruby'],
  description: 'A daily selection of privately personalized reads; no accounts or'
  + 'sign-ups required.',
  button: 'See Project',
},
{
  name: 'Multi-post Stories',
  imgUrl: './Images/pages/SnapshootPortfolio3.png',
  techs: ['html', 'css', 'ruby'],
  description: 'A daily selection of privately personalized reads; no accounts or'
  + 'sign-ups required.',
  button: 'See Project',
},
];

function createWorksSection() {
  if (myProjects.length !== 0) {
    const myWorksSection = document.querySelector('.myWorksSection');
    for (let i = 0; i < myProjects.length; i += 1) {
      let technologies = '';
      for (let j = 0; j < myProjects[i].techs.length; j += 1) {
        technologies += `<li>${myProjects[i].techs[j]}</li>`;
      }
      myWorksSection.innerHTML += '<li class="tonic">'
        + `<img src="${myProjects[i].imgUrl}" alt="project background image" class="image-responsive">`
        + '<div>'
        + `<h3>${myProjects[i].name}</h3>`
        + '<ul class="work-info">'
        + '<li class="canopy">CANOPY</li>'
        + '<li><span class="span"></span></li>'
        + '<li class="canopy1">Back End Dev</li>'
        + '<li><span class="span"></span></li>'
        + '<li class="canopy1">2015</li>'
        + '</ul>'
        + `<p class="despription">${myProjects[i].description}</p>`
        + `<ul class="tech-info">${technologies}</ul>`
        + `<button class="btn popup" type="button">${myProjects[i].button}</button>`
        + '</div>'
        + '</li>';
    }
  }
}

createWorksSection();

function addEventListenerList() {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', () => {
      popupDiv.id = 'overlay-popup';
      popupDivBG.id = 'overlay-popup-bg';
      projectDiv.id = 'overlay-project';
      document.body.appendChild(popupDiv);
      document.body.appendChild(popupDivBG);
      BlurSections();
      popupDivBG.style.display = 'block !important';
      popupDiv.style.display = 'block !important';
      projectDiv.innerHTML = ' <div>'
        + '<img src="./Images/Icon.png" id="cancel-button"></img>'
        + ' <h3>Tonic</h3>'
        + ' <ul class="work">'
        + '   <li class="canopys">CANOPY</li>'
        + '   <li><span class="span"></span></li>'
        + '  <li class="canopys1">Back End Dev</li>'
        + '   <li><span class="span"></span></li>'
        + '  <li class="canopys">2015</li>'
        + '  </ul>'
        + '<img src="./Images/pages/SnapshootPortfolio.png" class="image"></img>'
        + ' <p class="despription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
        + 'industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the'
        + 'relea'
        + '<div class="technologies">'
        + '  <ul class="tech-info">'
        + '    <li>html</li>'
        + '  <li>css</li>'
        + '  <li>javaScript</li>'
        + ' </ul>'
        + '<div id="container">'
        + '<button class="btns popup" type="button">See Live</button>'
        + '<button class="btns popup" type="button">See Source</button>'
        + '</div>'
        + '</div>'
        + '</div>';
      popupDiv.appendChild(projectDiv);
      projectDiv.style.display = 'block';

      const cancelBttn = document.querySelector('#cancel-button');
      cancelBttn.addEventListener('click', () => {
        projectDiv.remove();
        popupDiv.remove();
        UnBlurSections();
      });
    });
  }
}

addEventListenerList();