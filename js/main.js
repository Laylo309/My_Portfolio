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
    <li id="portfolio"><a class="mobile-menu-li" href="#portfolio">Portfolio</a></li>  
    <li id="2"><a class="mobile-menu-li" href="#about">About</a></li>  
    <li id="3"><a class="mobile-menu-li" href="#contact">Contact</a></li>  
    </ul>`;
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

// Projects popup
const popupDivBG = document.createElement('div');
const popupDiv = document.createElement('div');
const projectBttns = document.querySelectorAll('.popup');
const projectDiv = document.createElement('div');
const data = {
  projects: [
    {
      name: 'Cars Rental App',
      heading: 'Capstone/Group-project',
      stack: 'Full-stack',
      year: '2022',
      imgUrl: './Images/projects/Project_13.png',
      techs: ['ruby', 'rails', 'react'],
      description:
        'The Full-Stack Group  Project which is based on an app to book an appointment to try a fancy car, to resrve a car, and to create your own car. This project built using rails-react-gem and swagger for API documentation.',
      live_link: 'https://hanjelscars.netlify.app/',
      source_url: 'https://github.com/Hamzaoutdoors/rentalcars_backend',
    },
    {
      name: 'My Budget App',
      heading: 'Capstone/Solo-project',
      stack: 'Back-end',
      year: '2022',
      imgUrl: './Images/projects/Project_12.png',
      techs: ['ruby', 'rails', 'postgreSQL'],
      description:
        'Budget App is a Mobile Web application that lets you create a user, log in, so that the data is private to them. In this application you will be introduced to your new transactions associated with a category and see the money spent on each category.',
      live_link: 'https://shrouded-sea-17784.herokuapp.com/',
      source_url: 'https://github.com/Laylo309/my-budget-app',
    },
    {
      name: 'Recipe App',
      heading: 'Group-project',
      stack: 'Back-end',
      year: '2021',
      imgUrl: './Images/projects/Project_11.png',
      techs: ['ruby', 'rails', 'javascript'],
      description:
        'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
      live_link: '#',
      source_url: 'https://github.com/Laylo309/Recipe-app',
    },
    {
      name: 'My Blog App',
      heading: 'Group-project',
      stack: 'Back-end',
      year: '2021',
      imgUrl: './Images/projects/Project_10.png',
      techs: ['ruby', 'rails', 'javascript'],
      description:
        'This is my Blogs app where, you can find a warm environment for you to share cheap wisdom, enchanting crowds, and more. Users here are so competent that they can distribute wisdom without being consulted, they can make posts, receive commentaries on those posts, and receive likes.',
      live_link: '#',
      source_url: 'https://github.com/Laylo309/My-blog-app',
    },
    {
      name: 'OOP-school-library',
      heading: 'Solo-project',
      stack: 'Back-end',
      year: '2021',
      imgUrl: './Images/projects/Project_9.png',
      techs: ['ruby', 'rspec', 'OOP'],
      description:
        'Imagine that you are the librarian of OOP University, and you need a tool to record what books are in the library and who borrows them. Unit testing runs with Rspec.',
      live_link: '#',
      source_url: 'https://github.com/Laylo309/OOP-school-library',
    },
    {
      name: 'Covid-19 data traker',
      heading: 'Capstone/Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_8.png',
      techs: ['javascript', 'react', 'redux'],
      description:
        'SPA Mobile web app which is created using React and Redux. This webapp helps to get new information about Covid-19. Snapshot test integrated using Jest library.',
      live_link: 'https://covid19-tracker-laylo309.netlify.app/#/home',
      source_url:
        'https://github.com/Laylo309/react_capstone',
    },
    {
      name: 'Space Travelers’Hub',
      heading: 'Group-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_7.png',
      techs: ['javascript', 'react', 'redux'],
      description:
        'This is a React project where a user can observe information about rockets and space travel, the application will allow users to book rockets and join selected space missions. Application was made using React and Redux. Snapshot test integrated using Jest library.',
      live_link: 'https://space-travellers-laylo309.netlify.app/',
      source_url:
        'https://github.com/aristides1000/space-travelers-hub-react-redux',
    },
    {
      name: 'Math Magicians',
      heading: 'Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_6.png',
      techs: ['css', 'javascript', 'react'],
      description:
        'My first Single Page React App. Simple calculator which is created using ReactJs. It performs mathematical operations like addition, subtraction, multiplication, and division. Snapshot test integrated using Jest library.',
      live_link: 'https://math-magicians-laylo309.netlify.app/',
      source_url: 'https://github.com/Laylo309/Math_magicians',
    },
    {
      name: 'Leaderboard',
      heading: 'Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_5.png',
      techs: ['html', 'css', 'javascript'],
      description:
        'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
      live_link: 'https://leaderboard-laylo309.netlify.app/',
      source_url: 'https://github.com/Laylo309/Leaderboard',
    },
    {
      name: 'To-do list',
      heading: 'Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_4.png',
      techs: ['html', 'css', 'javascript'],
      description:
        '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
      live_link: 'https://to-do-list-laylo309.netlify.app/',
      source_url: 'https://github.com/Laylo309/to-do-list',
    },
    {
      name: 'Tourism website',
      heading: 'Capstone/Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_3.png',
      techs: ['html', 'css', 'javascript'],
      description:
        'Static tourism website where you can get information like price of tours and about cities.',
      live_link: 'https://tourism-website-laylo309.netlify.app/',
      source_url: 'https://github.com/Laylo309/first_capstone',
    },
    {
      name: 'Clock',
      heading: 'Solo-project',
      stack: 'Front-end',
      year: '2021',
      imgUrl: './Images/projects/Project_1.png',
      techs: ['html', 'css', 'javascript'],
      description:
        'My very first project which built with Vanilla JS and Git&Github. This is the Clock that shows current time.',
      live_link: 'https://clock-laylo309.netlify.app/',
      source_url: 'https://github.com/Laylo309/Clock',
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
       <li class="canopy">${data.projects[i].heading}</li>  
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
           <li class="canopys">${data.projects[popupId].heading}</li>  
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
