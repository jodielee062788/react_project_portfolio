
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
      <h1>About Me</h1>
      img
      <Project />
      <Footer />
    </Router>
  );
}

export default App;
