// Imports
import './style.css';
import reduxIcon from './images/redux-icon.png';
import { scrollFunction } from './modules/header.js';

// When the user scrolls, call scrollFunction
window.onscroll = () => {
  scrollFunction();
};

// Get the currently selected project from local storage
const selected = JSON.parse(localStorage.getItem('project'));

// Function to display the correct technologies on screen
const tech = () => {
  if (selected.tech.length === 3) {
    return `
      <i class="fa-brands fa-html5 per"></i>
      <i class="fa-brands fa-css3 per"></i>
      <i class="fa-brands fa-square-js per"></i>
    `;
  }

  if (selected.tech.length === 2) {
    return `
      <i class="fa-brands fa-react per"></i>
      <img src=${reduxIcon} alt="redux" id="redux-icon"/>
    `;
  }

  return '<i class="fa-brands fa-react per"></i>';
};

// On page load, append the project to the DOM
const main = document.getElementById('project-main');
const title = document.getElementById('path-title');
title.textContent = selected.title;
const project = document.createElement('section');
project.className = 'project-details';
project.id = 'project-section';
project.innerHTML = `
  <div>
    <img alt="card" src=${selected.imgDemo} id="project-img" class="pro-img">
  </div>
  <div class="info">
    <h2>${selected.title}</h2>
    <p>${selected.desc}</p>
    ${tech()}
    <br><br><br><br><br>
    <a href=${selected.source} class="info-a" target="_blank">View Source</a>
    <a href=${selected.demo} class="info-a" target="_blank">Live Demo</a>
  </div>
`;

main.appendChild(project);
