import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  let techString = '';

  project.tech.forEach((t) => {
    techString += `  ${t}  |`;
  });

  techString = techString.slice(0, -2);

  return ( 
    <div className="project" style={{backgroundImage: `url(${project.img})`}}>
      <div className="overlay">
        <div className="text">
          <h3>{project.title}</h3>
          <p>{project.intro}</p>
          <h4>{techString}</h4>
          <Link to={`/project/${project.id}`} target='_blank' className="pro-a" id={`project-${project.id}`}>VIEW</Link>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape().isRequired,
};
 
export default Project;