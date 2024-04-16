/* eslint-disable react/prop-types */

import CardHeader from '../Card/CardHeader';
import CardLinks from '../Card/CardLink';

export default function CardBody({ title, deployedLink, githubLink, imageSrc, description, technologies }) {
  return (
    <div className="card-body">
      <CardHeader title={title} />
      <img src={imageSrc} className="card-img-top" alt={title} />
      <p className="description card-text">{description}</p>
      {technologies && Array.isArray(technologies) && (
        <div className="tech-logo d-flex gap-2">
          {technologies.map((tech, index) => (
            <img 
              key={index} 
              src={`./img/${tech.toLowerCase()}.png`} 
              alt={tech} 
              title={tech} 
              className="tech-logo" 
            />
          ))}
        </div>
      )}
      <CardLinks deployedLink={deployedLink} githubLink={githubLink} />
    </div>
  );
}
