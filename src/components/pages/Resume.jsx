import Footer from '../Footer';

export default function Resume() {
  const frontendProficiencies = [
    { name: 'React', logo: './img/react.png' },
    { name: 'HTML', logo: './img/html.png' },
    { name: 'CSS', logo: './img/css.png' },
    { name: 'JavaScript', logo: './img/javascript.png' },
    { name: 'jQuery', logo: './img/jquery1.png' },
    { name: 'Vue.js', logo: './img/vue.png' },
    { name: 'Vite', logo: './img/vite.png' },
    { name: 'Bootstrap', logo: './img/bootstrap.png' },
    { name: 'Tailwind CSS', logo: './img/tailwind1.png' },
  ];

  const backendProficiencies = [
    { name: 'Node.js', logo: './img/node.js.png' },
    { name: 'Express.js', logo: './img/express.png' },
    { name: 'MySQL', logo: './img/database.png' },
    { name: 'Sequelize', logo: './img/sequelize.png' },
    { name: 'MongoDB', logo: './img/mongodb.png' },
    { name: 'GraphQL', logo: './img/graphql.png' },
    { name: 'Python', logo: './img/python.png' },
    { name: 'Java', logo: './img/web.png' },
  ];

  const otherTechnologies = [
    { name: 'Git', logo: './img/git.png' },
    { name: 'GitHub', logo: './img/github.png' },
    { name: 'GitLab', logo: './img/gitlab.png' },
    { name: 'Webpack', logo: './img/webpack.png' },
    { name: 'Babel', logo: './img/babel.png' },
    { name: 'Jest', logo: './img/jest.png' },
    { name: 'Heroku', logo: './img/heroku.png' },
    { name: 'Netlify', logo: './img/netlify.png' },
  ];

  return (
    <div className='resume d-flex flex-column align-items-center'>
      <div className="resume-logo">
        <img src="./img/cat4.png" alt="cat logo" />
        <h1 className='ms-3 fw-bold'>Resume</h1>
      </div>
      <p>
        Download my resume:{' '}
        <a href="/img/resume.pdf" download>
          Resume.pdf
        </a>
      </p>
      <div className="proficiencies row">
        <div className="col-md-4 proficiency-section">
          <h3 className='mb-4'>Frontend Proficiencies</h3>
          <ul className="proficiency-list">
            {frontendProficiencies.map((skill, index) => (
              <li key={index}>
                <img src={skill.logo} alt={`${skill.name} logo`} className="proficiency-logo mb-2 ms-5" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4 proficiency-section">
          <h3 className='mb-4'>Backend Proficiencies</h3>
          <ul className="proficiency-list">
            {backendProficiencies.map((skill, index) => (
              <li key={index}>
                <img src={skill.logo} alt={`${skill.name} logo`} className="proficiency-logo mb-2 ms-5" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4 proficiency-section">
          <h3 className='mb-4'>Development<br></br>Tools</h3>
          <ul className="proficiency-list">
            {otherTechnologies.map((tech, index) => (
              <li key={index}>
                <img src={tech.logo} alt={`${tech.name} logo`} className="proficiency-logo mb-2 ms-5" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
