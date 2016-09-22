import React, {Component, PropTypes} from 'react';


// import styles from './dealer.scss';

/*
 AppointmentsPage component.
    - Shell for other components

 Standard Use: <AppointmentsPage id={unique id} appointments={data} />

 Requires: React, React-Bootstrap, React-Entypo

 Parameters:
   id: string
      -unique id related to component, Required

   appointments: formatted Array
      - An array of values pertaining to an individual customer's appointments, Required
      [
       {
       id: number
          - unique id of appointment

       time: string

       type: string,
       status: string,
       vehicle: object
         {
           id: number,
           year: number,
           make: string,
           model: string
       }
     }]

 */

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Appointments Page Content
      </div>
    );
  }
}

AppointmentsPage.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.array,
};

AppointmentsPage.defaultProps = {
};

export default AppointmentsPage;
