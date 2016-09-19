/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';


import AppointmentsActivityItem from './AppointmentsActivityItem';

/*
 AppointmentsPage component.
 Requires: React, React-Bootstrap, React-Entypo

 Parameters:
 [prop] :: [prop type]
 - description

 */

const AppointmentsPage = (props) => {
  const {
    data,
    ...other
  } = props;
  return (
    <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
      <Modal.Header closeButton>
        <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
      </Modal.Header>
      <Modal.Body className="container">
        <div className="appointmentsPage__content">
          {data}

          <AppointmentsActivityItem time="" vehicle="" apptType="" apptStatus=""/>
        </div>
      </Modal.Body>
    </Modal>
  );
};
AppointmentsPage.propTypes = {
  data: PropTypes.object
};

export default AppointmentCard;
/* eslint-enable react/no-multi-comp */


/*
 time: React.PropTypes.string.isRequired, //
 apptLastUpdatedBy: React.PropTypes.string,
 apptCreatedBy: React.PropTypes.string,
 apptConfirmedBy: React.PropTypes.string,
 vehicle: React.PropTypes.string.isRequired, //
 apptDescription: React.PropTypes.string,
 apptNotes: React.PropTypes.string,
 apptType: React.PropTypes.string.oneOf(['meeting','phone','email','letter','fax','other','service']).isRequired, //
 apptStatus: React.PropTypes.string.oneOf(['Not Confirmed','Confirmed','Past Due','Service Appointment','Missed','Cancelled']).isRequired, //
 isUrgent: React.PropTypes.bool,
 key: React.PropTypes.oneOfType([
 React.PropTypes.string,
 React.PropTypes.number
 ]);
 */
