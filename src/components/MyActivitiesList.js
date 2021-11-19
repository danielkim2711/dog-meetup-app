import React from 'react';

// Components
import MyActivities from './MyActivities';

const MyActivitiesList = ({ activitiesList }) => {
  return (
    <ul className='activity__list'>
      {activitiesList.map((activities) => (
        <MyActivities
          key={activities.id}
          activityId={activities.id}
          title={activities.title}
          description={activities.description}
          created={activities.created}
        />
      ))}
    </ul>
  );
};

export default MyActivitiesList;
