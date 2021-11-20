import React from 'react';

// Components
import ActivityItem from './ActivityItem';

const Activities = ({ loadedActivities, loadedLoggedInUser }) => {
  return (
    <ul className='activity__list'>
      {loadedActivities.map((activity) => (
        <ActivityItem
          key={activity.id}
          title={activity.title}
          description={activity.description}
          location={activity.location}
          created={activity.created}
          numberOfUsers={activity.number_of_users}
          user={activity.user}
          loadedLoggedInUser={loadedLoggedInUser}
        />
      ))}
    </ul>
  );
};

export default Activities;
