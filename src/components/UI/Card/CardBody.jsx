
import CardHeader from '../Card/CardHeader';
import CardLinks from '../Card/CardLink';

function CardBody({ title, deployedLink, githubLink, imageSrc }) {
  return (
    <div className="card-body">
      <CardHeader title={title} />
      <CardLinks deployedLink={deployedLink} githubLink={githubLink} />
      <img src={imageSrc} className="card-img-top" alt={title} />
    </div>
  );
}

export default CardBody;
