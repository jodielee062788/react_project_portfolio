
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';
// import About from './About'; // You'll need to create this component
// import Portfolio from './Portfolio'; // You'll need to create this component
// import Contact from './Contact'; // You'll need to create this component
// import Resume from './Resume'; // You'll need to create this component

function App() {
  return (
    <Router>
      <Header />
      <div className="logo-about">
        <img src="./img/cat1.png" alt="" />
        <h1>About Me</h1>
      </div>
     
      <div className="about-details"><p>I&apos;m <span className="name">Jodie Lee</span> — a dedicated coder and aspiring web developer. 
          Whether it&apos;s making things look good on the front-end or figuring out the technical side in back-end, 
          I enjoy the whole process and love learning new things.</p>
        <img src="./img/pixil-frame-0.png" alt="" />
      </div>
      <Project />
      <Footer />
    </Router>
  );
}

export default App;
