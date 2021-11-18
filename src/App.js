import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

// Components
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ActivityPage from './pages/ActivityPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DogsPage from './pages/DogsPage';
import MyActivitiesPage from './pages/MyActivitiesPage';
import Footer from './components/Footer';

function App() {
  const cookies = new Cookies();
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();

  return (
    <CookiesProvider>
      <Router>
        <Header username={username} />
        <Route
          path='/'
          exact
          component={() =>
            cookies.get('myToken') === undefined ? (
              <HomePage />
            ) : (
              <ActivityPage userId={userId} setUsername={setUsername} />
            )
          }
        />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/register' component={RegisterPage} />
        <Route
          path='/signin'
          component={() => <SignInPage setUserId={setUserId} />}
        />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/dogs' component={DogsPage} />
        <Route path='/activities' component={MyActivitiesPage} />
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
