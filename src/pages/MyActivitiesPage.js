import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// Components
import MyActivitiesList from '../components/MyActivitiesList';

const MyActivitiesPage = ({ loadedLoggedInUser }) => {
  const [token] = useCookies(['myToken']);

  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    axios
      .get('http://127.0.0.1:8000/api/activities/', {
        headers: {
          Authorization: `Token ${token['myToken']}`,
        },
      })
      .then((res) => {
        const activities = [];
        res.data.forEach((activity) =>
          activity.user === loadedLoggedInUser.user_id
            ? activities.push(activity)
            : console.log('Error occured to forEach')
        );
        setActivitiesList(activities);
      })
      .catch((err) => console.log('Error! :', err));
  };

  return (
    <section className='my_activities__section'>
      <h1>My Activities</h1>
      {activitiesList.length !== 0 ? (
        <MyActivitiesList
          activitiesList={activitiesList}
          loadedLoggedInUser={loadedLoggedInUser}
        />
      ) : (
        <div>
          <h1>You haven't posted any activities yet</h1>
        </div>
      )}
      <Link to='/newactivities' className='nav__link remove-underline'>
        <div className='floating-button'>+</div>
      </Link>
    </section>
  );
};

export default MyActivitiesPage;
