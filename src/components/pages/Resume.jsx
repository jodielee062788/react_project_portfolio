
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
      <h2>Resume</h2>
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
