import React, {PropTypes} from 'react';
import AppointmentsActivityList from './AppointmentsActivityList';


// class AppointmentsActivityListContainer extends React.Component {
//   constructor(props){
//     super(props);
//   }

const AppointmentsActivityListContainer = ({appointments}) => {
  const sortByTimeKeyDir = (array, key, direction) => {
    return array.sort(function(a, b){
      const keyA = new Date(a[key]),
        keyB = new Date(b[key]);
      // Compare the 2 dates
      if(direction === 'des'){
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
      } else if(direction === 'asc') {
        if(keyA > keyB) return -1;
        if(keyA < keyB) return 1;
      }
      return 0;
    });
  };

  // sort the appointments by time
  const sortedAppointments = sortByTimeKeyDir(appointments, 'time', 'des');
  const currentAppointments = [];
  let historyAppointments = [];

  // separate appointments into Active and History
  sortedAppointments.forEach((appt) => {
    if (['Missed','Cancelled','Completed'].indexOf(appt.status) > -1) {
      historyAppointments.push(appt);
    } else {
      currentAppointments.push(appt);
    }
  });
  historyAppointments = sortByTimeKeyDir(historyAppointments, 'time', 'asc'); // show History newest to oldest.  Current Activity should be oldest to newest.

  return (
    <div className="activityLists">

      <AppointmentsActivityList appointments={currentAppointments} listtype="current" htmlId="appointmentsListCurrentActivity"/>

      <AppointmentsActivityList appointments={historyAppointments} listtype="history" htmlId="appointmentsListHistory"/>

    </div>
  );
};

AppointmentsActivityListContainer.propTypes = {
  appointments: PropTypes.array.isRequired
};

export default AppointmentsActivityListContainer;
