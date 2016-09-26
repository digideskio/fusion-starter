import React, {PropTypes} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import AppointmentsActivityListContainer from './AppointmentsActivityListContainer';

const AppointmentsModal = ({htmlId, customerName, appointments, visible, toggleVisibility}) => {
  return(
      <Modal dialogClassName="modal-full"
             className="appointmentscard__fullpage"
             show={visible}
             onHide={toggleVisibility}
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
  htmlId: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.shape({
    appointmentId: PropTypes.number,
    time: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    vehicle: PropTypes.shape({
      vehicleId: PropTypes.number,
      year: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      trim: PropTypes.string
    })
  })).isRequired,
  visible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired
};


export default AppointmentsModal;
