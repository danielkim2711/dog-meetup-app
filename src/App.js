import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

// Components
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
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
        <Route path='/register' component={RegisterPage} />
        <Route
          path='/signin'
          component={() => <SignInPage setUserId={setUserId} />}
        />
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
