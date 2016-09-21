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
    <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other} autoFocus>
      <Modal.Header closeButton>
        <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
      </Modal.Header>
      <Modal.Body className="container">
        <div className="appointmentsPage__content">
          {/* data */}
          <AppointmentsActivityItem appointmentInfo={data[0]} id={1} key={1}/>
          <AppointmentsActivityItem appointmentInfo={data[1]} id={2} key={2}/>
          <AppointmentsActivityItem appointmentInfo={data[2]} id={3} key={3}/>
        </div>
      </Modal.Body>
    </Modal>
  );
};
AppointmentsPage.propTypes = {
  data: PropTypes.array
};

export default AppointmentsPage;
/* eslint-enable react/no-multi-comp */
