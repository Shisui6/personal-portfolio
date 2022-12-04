import './style.css';
import './modules/typewriter.js';
import animate from './modules/animate.js';
import { scrollFunction, highlightLink } from './modules/header.js';
import profileImg from './images/profile.jpg';
import redditImg from './images/reddit.jpg';
import todoImg from './images/todo.jpg';
import jamImg from './images/spotify.jpg';
import bookImg from './images/books.jpg';
import mealImg from './images/meal.jpg';
import leaderImg from './images/leader.jpg';

// Set the src for the profile image
const profile = document.getElementById('profile-img');
profile.src = profileImg;
profile.srcset = `${profileImg} 340w, ${profileImg} 540w`;

// When the user scrolls down 80px from the top of the document, change the header's style
window.onscroll = () => {
  highlightLink();
  scrollFunction();
  animate();
};

// Get relevant elements from the DOM
const gallery = document.getElementById('gallery-id');

const projects = [
  {
    title: 'Reddit App',
    tech: ['React', 'Redux'],
    img: redditImg,
    delay: '1.6s',
  },
  {
    title: 'Meal App',
    tech: ['HTML', 'CSS', 'JS'],
    img: mealImg,
    delay: '2.6s',
  },
  {
    title: 'Jamming',
    tech: ['React'],
    img: jamImg,
    delay: '3.6s',
  },
  {
    title: 'My Day',
    tech: ['HTML', 'CSS', 'JS'],
    img: todoImg,
    delay: '4.6s',
  },
  {
    title: 'Leaderboard',
    tech: ['HTML', 'CSS', 'JS'],
    img: leaderImg,
    delay: '5.6s',
  },
  {
    title: 'Awesome Books',
    tech: ['HTML', 'CSS', 'JS'],
    img: bookImg,
    delay: '6.6s',
  },
];

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
        <a href="./project.html" class="pro-a">VIEW</a>
      </div>
    </div>
  `;

  gallery.appendChild(project);
});
