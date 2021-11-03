import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Showcase} />
      <Card />
      <Footer />
    </Router>
  );
}

export default App;
