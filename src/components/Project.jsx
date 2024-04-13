

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a> |
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
}

export default Project;
