import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

class AppointmentsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible});
  };

  render() {
    const {
      appointments,
      customerName
    } = this.props;

    return(
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage"
             show={this.state.visible}
             onHide={this.toggleVisibility}
             container={this}
      >
        <Modal.Header closeButton>
          <Modal.Title className="display-4">{customerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
            Appointments Page Content
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AppointmentsModal.propTypes = {
  id: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  appointments: PropTypes.array
};

export default AppointmentsModal;
