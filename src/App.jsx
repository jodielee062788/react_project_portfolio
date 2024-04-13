
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Project';
import './App.css';
// import About from './About'; // You'll need to create this component
// import Portfolio from './Portfolio'; // You'll need to create this component
// import Contact from './Contact'; // You'll need to create this component
// import Resume from './Resume'; // You'll need to create this component

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>

      <div className="logo-about">
        <img src="./img/cat1.png" alt="" />
        <h1>About Me</h1>
      </div>
     
      <div className="about-details"><p>I&apos;m <span className="name">Jodie Lee</span> — a dedicated coder and aspiring web developer. 
          Whether it&apos;s making things look good on the front-end or figuring out the technical side in back-end, 
          I enjoy the whole process and love learning new things.</p>
        <img src="./img/pixil-frame-0.png" alt="" />
        <img src="./img/unnamed.jpg" alt="" />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
