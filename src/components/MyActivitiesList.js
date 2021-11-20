import React from 'react';

// Components
import MyActivities from './MyActivities';

const MyActivitiesList = ({ activitiesList, loadedLoggedInUser }) => {
  return (
    <ul className='activity__list'>
      {activitiesList.map((activities) => (
        <MyActivities
          key={activities.id}
          activityId={activities.id}
          title={activities.title}
          description={activities.description}
          location={activities.location}
          created={activities.created}
          loadedLoggedInUser={loadedLoggedInUser}
        />
      ))}
    </ul>
  );
};

export default MyActivitiesList;
