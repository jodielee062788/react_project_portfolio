
import ProjectCard from '../UI/ProjectCard';
import Footer from '../Footer';

export default function Portfolio() {
  const projects = [
    {
      title: 'Games Blog',
      imageSrc: '/img/gamesblog.png',
      deployedLink: 'https://games-blog-810710186486.herokuapp.com/',
      githubLink: 'https://github.com/jodielee062788/mvc_techblog',
      description: 'A blog website where users can share and read about their favorite games.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express', 'Sequelize', 'MySQL']
    },
    {
      title: 'Weather App',
      imageSrc: '/img/weatherapp.png',
      deployedLink: 'https://jodielee062788.github.io/weather-forecast-app/',
      githubLink: 'https://github.com/jodielee062788/weather-forecast-app',
      description: 'A weather forecasting app allows users to check the weather outlook for multiple cities.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'I Choose You',
      imageSrc: '/img/ichooseyou.png',
      deployedLink: 'https://adamisitmez.github.io/I-Choose-You/',
      githubLink: 'https://github.com/AdamIsitmez/I-Choose-You',
      description: 'An interactive Pokemon battle simulator that allows users to test their Pokemon knowledge and battle skills',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind']
    },
    {
      title: 'Wagerless',
      imageSrc: '/img/wagerless.png',
      deployedLink: 'https://wagerless-app-96d9cde47554.herokuapp.com/',
      githubLink: 'https://github.com/Y1va/Wagerless',
      description: 'An rock paper scissors game designed to promote responsible gambling.',
      technologies: ['HTML', 'CSS', 'Javascript', 'Express', 'Node.js', 'Bootstrap', 'MySQL', 'Sequelize' ]
    },
    {
      title: 'Note Taker',
      imageSrc: '/img/notetaker.png',
      deployedLink: 'https://dry-coast-63605-66572fc1d17d.herokuapp.com/',
      githubLink: 'https://github.com/jodielee062788/express_note_taker',
      description: 'An application designed to help users write and save notes.',
      technologies: ['HTML', 'CSS', 'Javascript', 'Express']
    },
    {
      title: 'JS Quiz Game',
      imageSrc: '/img/jsquiz.png',
      deployedLink: 'https://jodielee062788.github.io/js-code-quiz/',
      githubLink: 'https://github.com/jodielee062788/js-code-quiz',
      description: 'A JavaScript Quiz game that challenges users on their knowledge of JavaScript fundamentals.',
      technologies: ['HTML', 'CSS', 'Javascript']
    },
  ];

  return (
    <div className="portfolio d-flex flex-column align-items-center ">
      <div className="portfolio-logo mb-3">
        <img src="./img/cat2.png" alt="cat logo" className='mt-1 shadow' />
        <h1 className='ms-3 fw-bold'>Portfolio</h1>
      </div>
      <div className="proj-list row gx-3 justify-content-center">
        {projects.map((project, index) => (
          <div className="col-7 col-lg-3 col-sm-6 col-md-4 col-xl-2 mx-auto" key={index}>
            <ProjectCard
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}