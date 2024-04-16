/* eslint-disable react/prop-types */

export default function CardLinks({ deployedLink, githubLink }) {
  return (
    <div className="card-links mt-4">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src="./img/website.png" alt="Deployed App Logo" className="logo-icon" />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src="./img/logo.png" alt="GitHub Repo Logo" className="logo-icon" />
      </a>
    </div>
  );
}
