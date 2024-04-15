
import ProjectCard from '../UI/ProjectCard';
import Footer from '../Footer';

export default function Portfolio() {
  const projects = [
    {
      title: 'Games Blog',
      imageSrc: './public/img/gamesblog.png',
      deployedLink: 'https://games-blog-810710186486.herokuapp.com/',
      githubLink: 'https://github.com/jodielee062788/mvc_techblog',
    },
    {
      title: 'Weather Dashboard',
      imageSrc: '../public/img/weatherapp.png',
      deployedLink: 'https://jodielee062788.github.io/weather-forecast-app/',
      githubLink: 'https://github.com/jodielee062788/weather-forecast-app',
    },
    {
      title: 'I Choose You',
      imageSrc: '../public/img/ichooseyou.png',
      deployedLink: 'https://adamisitmez.github.io/I-Choose-You/',
      githubLink: 'https://github.com/AdamIsitmez/I-Choose-You',
    },
    {
      title: 'Wagerless',
      imageSrc: '../public/img/wagerless.png',
      deployedLink: 'https://wagerless-app-96d9cde47554.herokuapp.com/',
      githubLink: 'https://github.com/Y1va/Wagerless',
    },
    {
      title: 'Note Taker',
      imageSrc: '../public/img/notetaker.png',
      deployedLink: 'https://dry-coast-63605-66572fc1d17d.herokuapp.com/',
      githubLink: 'https://github.com/jodielee062788/express_note_taker',
    },
    {
      title: 'Javascript Quiz Game',
      imageSrc: '../public/img/jsquiz.png',
      deployedLink: 'https://jodielee062788.github.io/js-code-quiz/',
      githubLink: 'https://github.com/jodielee062788/js-code-quiz',
    },
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
      <Footer />
    </div>
  );
}

