
function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: '/path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      imageSrc: '/path/to/project2-image.jpg',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },
    // Add more projects here
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.imageSrc} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="card-text">
                  <a href={project.deployedLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
                    Deployed App
                  </a>
                  <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
