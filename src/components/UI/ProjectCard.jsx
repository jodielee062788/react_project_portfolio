/* eslint-disable react/prop-types */

import CardBody from '../UI/Card/CardBody';

export default function ProjectCard({ title, imageSrc, deployedLink, githubLink }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <CardBody
          title={title}
          imageSrc={imageSrc}
          deployedLink={deployedLink}
          githubLink={githubLink}
        />
      </div>
    </div>
  );
}

