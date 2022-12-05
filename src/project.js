import './style.css';
import { scrollFunction } from './modules/header.js';

window.onscroll = () => {
  scrollFunction();
};

const selected = JSON.parse(localStorage.getItem('project'));

const tech = () => {
  if (selected.tech.length === 3) {
    return `
      <i class="fa-brands fa-html5 per"></i>
      <i class="fa-brands fa-css3 per"></i>
      <i class="fa-brands fa-square-js per"></i>
    `;
  }

  return '<i class="fa-brands fa-react per"></i>';
};

const main = document.getElementById('project-main');
const title = document.getElementById('path-title');
title.textContent = selected.title;
const project = document.createElement('section');
project.className = 'project-details';
project.innerHTML = `
  <div>
    <img alt="card" src=${selected.imgDemo} id="project-img">
  </div>
  <div class="info">
    <h2>${selected.title}</h2>
    <p>${selected.desc}</p>
    ${tech()}
    <br><br><br><br><br>
    <a href=${selected.source} class="info-a">View Source</a>
    <a href=${selected.demo} class="info-a">Live Demo</a>
  </div>
`;

main.appendChild(project);

export default selected;