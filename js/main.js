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
const UnBlurSections = () => {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
};

const BlurSections = () => {
  // Add css class to behind sections
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
};

hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div.innerHTML = `    <img src="./Images/cancel.png" class="cancelBttn"></img>  
    <ul class="mobile-menu-ul">  
    <li class="mobile-menu-li" id="1">Porfolio</li>  
    <li class="mobile-menu-li" id="2">About</li>  
    <li class="mobile-menu-li" id="3">Contact</li>  
    </ul>`;
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
const data = {
  projects: [
    {
      stack: 'hello',
      year: '2021',
      name: 'Tonic',
      imgUrl: './Images/pages/SnapshootPortfolio.png',
      techs: ['html', 'css', 'ruby'],
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      live_link: '',
      source_url: '',
    },
    {
      stack: '',
      year: '2021',
      name: 'Multi-post Stories',
      imgUrl: './Images/pages/SnapshootPortfolio1.png',
      techs: ['html', 'css', 'ruby'],
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      live_link: '',
      source_url: '',
    },
    {
      stack: '',
      year: '2021',
      name: 'Tonic',
      imgUrl: './Images/pages/SnapshootPortfolio2.png',
      techs: ['html', 'css', 'javascript'],
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized reads; no accounts or sign-ups required.A daily selection of privately personalized reads; no accounts or sign-ups required.',
      live_link: '',
      source_url: '',
    },
    {
      stack: '',
      year: '2021',
      name: 'Multi-post Stories',
      imgUrl: './Images/pages/SnapshootPortfolio3.png',
      techs: ['html', 'css', 'ruby'],
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      live_link: '',
      source_url: '',
    },
  ],
};

const createWorksSection = () => {
  if (data.length !== 0) {
    const myWorksSection = document.querySelector('.myWorksSection');
    for (let i = 0; i < data.projects.length; i += 1) {
      let technologies = '';
      for (let j = 0; j < data.projects[i].techs.length; j += 1) {
        technologies += `<li>${data.projects[i].techs[j]}</li>`;
      }
      myWorksSection.innerHTML += `     <li class="tonic">  
       <img src="${data.projects[i].imgUrl}" alt="project background image" class="image-responsive">
       <div>  
       <h3>${data.projects[i].name}</h3>
       <ul class="work-info">  
       <li class="canopy">CANOPY</li>  
       <li><span class="span"></span></li>  
       <li class="canopy1">${data.projects[i].stack}</li>  
       <li><span class="span"></span></li>  
       <li class="canopy1">${data.projects[i].year}</li>  
       </ul>  
       <p class="description">${data.projects[i].description}</p>
       <ul class="tech-info">${technologies}</ul>
       <button class="popup-btn popup" id="${i}" type="button">See project</button>
       </div>  
       </li>`;
    }
  }
};

createWorksSection();

const addEventListenerList = () => {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', (e) => {
      const popupId = e.target.id;
      let technologies = '';
      for (let j = 0; j < data.projects[i].techs.length; j += 1) {
        technologies += `<li>${data.projects[popupId].techs[j]}</li>`;
      }
      popupDiv.id = 'overlay-popup';
      popupDivBG.id = 'overlay-popup-bg';
      projectDiv.id = 'overlay-project';
      document.body.appendChild(popupDiv);
      document.body.appendChild(popupDivBG);
      BlurSections();
      popupDivBG.style.display = 'block !important';
      popupDiv.style.display = 'block !important';

      projectDiv.innerHTML = ` <div>  
        <img src="./Images/Icon.png" id="cancel-button"></img>  
         <h3 class="popup-title">${data.projects[popupId].name}</h3>  
         <ul class="popup-work">  
           <li class="canopys">CANOPY</li>  
           <li><span class="span"></span></li>  
          <li class="canopys1">${data.projects[popupId].stack}</li>  
           <li><span class="span"></span></li>  
          <li class="canopys">${data.projects[popupId].year}</li>  
          </ul>  
        <img src="${data.projects[popupId].imgUrl}" class="image"></img>  
        <div class="popup-container">
         <p class="popup-description">${data.projects[popupId].description}</p>
        <div class="technologies">  
          <ul class="tech-info">  
          ${technologies}
         </ul>  
        <div id="container">  
        <button class=" btns popup" type="button"><a href="${data.projects[popupId].live_link}">See Live</a></button>  
        <button class="btns popup" type="button"><a href="${data.projects[popupId].source_url}">See Source</a></button>  
        </div>
        </div>
        </div>
        </div>`;
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
};

addEventListenerList();

// Form Validation
const form = document.getElementById('form');
const emailForm = 'Please enter a valid email address';

const hasValue = (input) => {
  if (input === '') {
    return false;
  }
  return true;
};

const showMessage = (input, message) => {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
};

const validateEmail = (input, emailForm) => {
  const value = input.value.trim();
  if (!hasValue(input.value)) {
    return false;
  }
  const lowerCaseValidator = /[A-Z]/g;
  if (value.match(lowerCaseValidator)) {
    input.value = value.toLowerCase();
    return showMessage(input, emailForm);
  }
  return true;
};

const errorMessage = () => {
  const allmessages = document.querySelectorAll('.validation');
  if (allmessages.length > 0) {
    for (let i = 0; i < allmessages.length; i += 1) {
      allmessages[i].innerHTML = '';
    }
  }
};

form.addEventListener('submit', (event) => {
  const emailSubmit = form.elements.user_email;
  const validEmail = validateEmail(emailSubmit, emailForm);
  if (validEmail) {
    errorMessage();
  }
  event.preventDefault();
});
