// Imports
import './style.css';
import './modules/typewriter.js';
import animate from './modules/animate.js';
import { scrollFunction, highlightLink } from './modules/header.js';
import profileImg from './images/profile1.JPG';
import reduxImg from './images/redux.png';
import rubyImg from './images/ruby.png';
import railsImg from './images/rails.png';
import redditImg from './images/reddit.jpg';
import todoImg from './images/todo.jpg';
import jamImg from './images/spotify.jpg';
import calcImg from './images/calc.jpg';
import mealImg from './images/meal.jpg';
import leaderImg from './images/leader.jpg';
import mealDemo from './images/meal-demo.png';
import todoDemo from './images/todo-demo.png';
import leaderboardDemo from './images/leaderboard-demo.png';
import redditDemo from './images/reddit-demo.png';
import jammingDemo from './images/jamming-demo.png';
import calcDemo from './images/calc-demo.png';

// Set src for images
const profile = document.getElementById('profile-img');
profile.src = profileImg;
profile.srcset = `${profileImg} 340w, ${profileImg} 540w`;
document.getElementById('redux').src = reduxImg;
document.getElementById('ruby').src = rubyImg;
document.getElementById('rails').src = railsImg;

// Update website style and animate elements when user scrolls
window.onscroll = () => {
  highlightLink();
  scrollFunction();
  animate();
};

// Function to produce counting animation
const animateCounter = () => {
  const valueDisplays = document.querySelectorAll('.num');
  const interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    const endValue = parseInt(valueDisplay.getAttribute('data-val'), 10);
    const duration = Math.floor(interval / endValue);
    const counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
};

// Function to check when an element is visible on screen
const onVisible = (element, callback) => {
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callback(element);
        observer.disconnect();
      }
    });
  }).observe(element);
};

// Run counting animation when coffee section is visible
onVisible(document.querySelector('#coffee-id'), () => {
  animateCounter();
});

// Get relevant elements from the DOM
const gallery = document.getElementById('gallery-id');

// Projects array
const projects = [
  {
    id: 1,
    title: 'Reddit App',
    desc: "A React and Redux web application that uses the reddit API to fetch and display post information under reddit's most popular subreddits.",
    tech: ['React', 'Redux'],
    img: redditImg,
    imgDemo: redditDemo,
    source: 'https://github.com/Shisui6/reddit-app',
    demo: 'https://shisui-reddit-app.netlify.app/',
    delay: '1s',
  },
  {
    id: 2,
    title: 'Meal App',
    desc: "Meal App is a web application that helps you decide your next meal. Select a meal to see how its prepared, or post a comment on how delicious it is. Don't forget to like 🧡 your favorites",
    tech: ['HTML', 'CSS', 'JS'],
    img: mealImg,
    imgDemo: mealDemo,
    source: 'https://github.com/Shisui6/meal-app',
    demo: 'https://shisui6.github.io/meal-app/',
    delay: '1.6s',
  },
  {
    id: 3,
    title: 'Jamming',
    desc: 'A react application for creating and saving playlists to spotify',
    tech: ['React'],
    img: jamImg,
    imgDemo: jammingDemo,
    source: 'https://github.com/Shisui6/jammming',
    demo: 'https://spotify1-playlist-creator.netlify.app/',
    delay: '2.2s',
  },
  {
    id: 4,
    title: 'Math Magicians',
    desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    tech: ['React'],
    img: calcImg,
    imgDemo: calcDemo,
    source: 'https://github.com/Shisui6/math-magicians',
    demo: 'https://shisui-math-magicians.netlify.app/',
    delay: '2.8s',
  },
  {
    id: 5,
    title: 'Leaderboard',
    desc: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    tech: ['HTML', 'CSS', 'JS'],
    img: leaderImg,
    imgDemo: leaderboardDemo,
    source: 'https://github.com/Shisui6/leaderboard',
    demo: 'https://shisui6.github.io/leaderboard/',
    delay: '3.4s',
  },
  {
    id: 6,
    title: 'My Day',
    desc: 'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    tech: ['HTML', 'CSS', 'JS'],
    img: todoImg,
    imgDemo: todoDemo,
    source: 'https://github.com/Shisui6/my-day',
    demo: 'https://shisui6.github.io/my-day/',
    delay: '4.0s',
  },
];

// Append each project to the DOM on page load
projects.forEach((element) => {
  let techString = '';

  element.tech.forEach((t) => {
    techString += `  ${t}  |`;
  });

  techString = techString.slice(0, -2);

  const project = document.createElement('div');
  project.className = 'project';
  project.style.backgroundImage = `url(${element.img})`;
  project.style.animationDelay = element.delay;
  project.innerHTML = `
    <div class="overlay">
      <div class="text">
        <p>${element.title}</p>
        <h4>${techString}</h4>
        <a href="./project.html" class="pro-a" id=project-${element.id}>VIEW</a>
      </div>
    </div>
  `;

  gallery.appendChild(project);

  document.getElementById(`project-${element.id}`).addEventListener('click', () => {
    localStorage.setItem('project', JSON.stringify(element));
  });
});
