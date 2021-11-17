import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

// Components
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ActivityPage from './pages/ActivityPage';
import SignInPage from './pages/SignInPage';
import Footer from './components/Footer';

function App() {
  const cookies = new Cookies();

  return (
    <CookiesProvider>
      <Router>
        <Header />
        <Route
          path='/'
          exact
          component={() =>
            cookies.get('myToken') === undefined ? (
              <HomePage />
            ) : (
              <ActivityPage />
            )
          }
        />
        <Route path='/register' component={RegisterPage} />
        <Route path='/signin' component={SignInPage} />
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
