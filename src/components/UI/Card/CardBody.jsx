/* eslint-disable react/prop-types */

import CardHeader from '../Card/CardHeader';
import CardLinks from '../Card/CardLink';

export default function CardBody({ title, deployedLink, githubLink, imageSrc, description }) {
  return (
    <div className="card-body">
      <CardHeader title={title} />
      <img src={imageSrc} className="card-img-top" alt={title} />
      <p className="card-text">{description}</p>
      <CardLinks deployedLink={deployedLink} githubLink={githubLink} />
    </div>
  );
}

