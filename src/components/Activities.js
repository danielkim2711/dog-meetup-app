import React from 'react';

// Components
import ActivityItem from './ActivityItem';

const Activities = ({
  loadedActivities,
  loadedLoggedInUser,
  loadedProfile,
}) => {
  return (
    <ul className='activity__list'>
      {loadedActivities.map((activity) => (
        <ActivityItem
          key={activity.id}
          title={activity.title}
          description={activity.description}
          location={activity.location}
          created={activity.created}
          user={activity.user}
          loadedLoggedInUser={loadedLoggedInUser}
          loadedProfile={loadedProfile}
        />
      ))}
    </ul>
  );
};

export default Activities;
