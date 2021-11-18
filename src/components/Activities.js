import React from 'react';

// Components
import ActivityItem from './ActivityItem';

const Activities = ({ loadedActivities }) => {
  return (
    <ul className='activity__list'>
      {loadedActivities.map((activity) => (
        <ActivityItem
          key={activity.id}
          title={activity.title}
          description={activity.description}
          created={activity.created}
          user={activity.user}
        />
      ))}
    </ul>
  );
};

export default Activities;
