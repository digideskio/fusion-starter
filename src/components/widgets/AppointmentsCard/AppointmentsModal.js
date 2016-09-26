import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import AppointmentsActivityListContainer from './AppointmentsActivityListContainer';

const AppointmentsModal = ({id, customerName, appointments, visible, toggleVisibility}) => {
  return(
      <Modal dialogClassName="modal-full"
             className="appointmentscard__fullpage"
             show={visible}
             onHide={toggleVisibility}
             id={id}
      >
        <Modal.Header closeButton>
          <Modal.Title className="display-4">{customerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
            
            <AppointmentsActivityListContainer appointments={appointments}/>
            
          </div>
        </Modal.Body>
      </Modal>
  );
};

AppointmentsModal.propTypes = {
  id: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  appointments: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired
};


export default AppointmentsModal;
