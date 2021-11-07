import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={HomePage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/signin' component={SignInPage} />
      <Footer />
    </Router>
  );
}

export default App;
