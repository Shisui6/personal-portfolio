import { useSelector } from "react-redux";
import { selectProjects } from "../../redux/projects/projects";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiRubyRough } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiRedux, SiJavascript, SiRubyonrails, SiPostgresql } from 'react-icons/si';
import './ProjectDetails.css';
import { useParams } from "react-router-dom";
import { ImArrowDown2 } from "react-icons/im";

const ProjectDetails = () => {
  const projects = useSelector(selectProjects);
  const { id } = useParams();
  const project = projects[id - 1]
  
  const tech = () => {
    if (project.tech.length === 4) {
      return (
        <>
          <FaReact className="per" />
          <SiRedux className="per"/>
          <DiRubyRough className="per" />
          <SiRubyonrails className="per" />
        </>
      );
    }

    if (project.tech.length === 3) {
      if (project.tech.includes('Ruby')) {
        return (
          <>
            <DiRubyRough className="per" />
            <SiRubyonrails className="per" />
            <SiPostgresql className="per" />
          </>
        )
      }
      return (
        <>
          <AiFillHtml5 className="per" />
          <IoLogoCss3 className="per" />
          <SiJavascript className="per" />
        </>
      );
    }
  
    if (project.tech.length === 2) {
      return (
        <>
          <FaReact className="per" />
          <SiRedux className="per" />
        </>
      );
    }
  
    return (<FaReact className="per" />);
  };

  return ( 
    <>
      <section className="project-intro">
        <h1>Project Details</h1>
        <div className="path">
          <li><a href="/" className="path-a">Home</a></li>
          <li><a href="/#portfolio" className="path-a">Projects</a></li>
          <li id="hide"><a href="#" className="path-a">{project.title}</a></li>
        </div>
        <a href="#project-section" id="arrow"><i><ImArrowDown2 className="inline text-xl mt-10 animate-bounce" /></i></a>
      </section>
      <section className="project-details" id="project-section">
        <div>
          <img alt="card" src={project.imgDemo} id="project-img" className="pro-img" />
        </div>
        <div className="info">
          <h2 className=" text-2xl my-5 font-bold">{project.title}</h2>
          <p className="mb-2">{project.desc}</p>
          <div className="flex items-center mb-16">
            {tech()}
          </div>
          <a href={project.source} className="info-a" target="_blank" rel="noreferrer">View Source</a>
          <a href={project.demo} className="info-a" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </section>
    </>
  );
}
 
export default ProjectDetails;