import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Showcase} />
    </Router>
  );
}

export default App;
