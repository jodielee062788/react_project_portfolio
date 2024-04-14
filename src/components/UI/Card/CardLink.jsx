/* eslint-disable react/prop-types */

export default function CardLinks({ deployedLink, githubLink }) {
  return (
    <div className="card-text">
      <a href={deployedLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
}

