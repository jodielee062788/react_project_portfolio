
function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'RESTful APIs',
  ];

  return (
    <div className='resume'>
      <div className="resume-logo">
        <img src="./img/cat4.png" alt="" />
        <h2>Resume</h2>
      </div>
      <p>
        Download my resume:{' '}
        <a href="/path/to/resume.pdf" download>
          Resume.pdf
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
