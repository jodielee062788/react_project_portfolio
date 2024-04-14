
import ProjectCard from '../UI/ProjectCard';

export default function Portfolio() {
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
    <div className="portfolio d-flex flex-column align-items-center mx-auto">
      <div className="portfolio-logo">
        <img src="./img/cat2.png" alt="" />
        <h1>Portfolio</h1>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

