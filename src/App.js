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
import NewDogsPage from './pages/NewDogsPage';
import MyActivitiesPage from './pages/MyActivitiesPage';
import NewActivityPage from './pages/NewActivityPage';
import Footer from './components/Footer';

function App() {
  const cookies = new Cookies();
  const [loadedLoggedInUser, setloadedLoggedInUser] = useState([]);
  const [loadedProfile, setLoadedProfile] = useState([]);

  return (
    <CookiesProvider>
      <Router>
        {console.log('Loaded Profile :', loadedProfile)}
        {console.log('Logged In User', loadedLoggedInUser)}
        <Header username={loadedProfile.first_name} />
        <Route
          path='/'
          exact
          component={() =>
            cookies.get('myToken') === undefined ? (
              <HomePage />
            ) : (
              <ActivityPage loadedProfile={loadedProfile} />
            )
          }
        />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/register' component={RegisterPage} />
        <Route
          path='/signin'
          component={() => (
            <SignInPage
              loadedLoggedInUser={loadedLoggedInUser}
              setloadedLoggedInUser={setloadedLoggedInUser}
              setLoadedProfile={setLoadedProfile}
            />
          )}
        />
        <Route
          path='/profile'
          component={() => (
            <ProfilePage
              loadedLoggedInUser={loadedLoggedInUser}
              loadedProfile={loadedProfile}
            />
          )}
        />
        <Route
          path='/dogs'
          component={() => <DogsPage loadedLoggedInUser={loadedLoggedInUser} />}
        />
        <Route
          path='/newdogs'
          component={() => (
            <NewDogsPage loadedLoggedInUser={loadedLoggedInUser} />
          )}
        />
        <Route
          path='/activities'
          component={() => (
            <MyActivitiesPage loadedLoggedInUser={loadedLoggedInUser} />
          )}
        />
        <Route
          path='/newactivities'
          component={() => (
            <NewActivityPage loadedLoggedInUser={loadedLoggedInUser} />
          )}
        />
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
