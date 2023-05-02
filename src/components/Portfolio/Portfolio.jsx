import { useEffect, useState } from "react";
import Project from "./Project";
import './Portfolio.css';
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProjects, setFilter } from "../../redux/projects/projects";
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Pagination } from '@mantine/core';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Portfolio = () => {
  const dispatch = useDispatch();
  const [activePage, setPage] = useState(1);
  const [projects, setProjects] = useState([]);
  const [fade, setFade] = useState(true);
  const projectsArr = useSelector(selectFilteredProjects);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    if (activePage === 1) {
      setProjects(projectsArr.slice(0, 6));
    } else {
      setProjects(projectsArr.slice(6, 12));
    }
  }, [activePage, projectsArr]);

  const handleClick = (e) => {
    const buttons = document.querySelectorAll('#fil button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    e.target.classList.add('active');

    dispatch(setFilter(e.target.textContent))
    setPage(1);
    setFade(false);
  };

  const animateBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return ( 
    <section className="portfolio-section" id="portfolio">
      <Fade direction="up" duration={1300} delay={200} triggerOnce>
      <h2 id="fea">Featured <strong className="font-bold">Portfolio</strong></h2>
      </Fade>
        <Fade duration={2000} delay={1000} triggerOnce>
        <ul id="fil">
          <li><button onClick={handleClick} className="active">All</button></li>
          <li><button onClick={handleClick}>Front-End</button></li>
          <li><button onClick={handleClick}>Back-End</button></li>
          <li><button onClick={handleClick}>Full-Stack</button></li>
        </ul>
        </Fade>
        <div className="gallery" id="gallery-id" ref={animationParent}>
          {fade ? <Reveal cascade duration={1200} keyframes={animateBottom} triggerOnce>
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
          </Reveal> : projects.map((project) => (
            <Project project={project} key={project.id} />
          )) }
        </div>
        <Pagination total={2} value={activePage} onChange={setPage} radius="lg" position="center" disabled={projects.length < 6 && activePage !== 2} />
    </section>
  );
}
 
export default Portfolio;