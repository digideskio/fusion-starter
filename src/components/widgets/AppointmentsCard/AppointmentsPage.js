import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
// import styles from './dealer.scss';

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAppointmentsModal: false
    };
  }

  toggleAppointmentsModal(){
    this.setState({showAppointmentsModal: !this.state.showAppointmentsModal});
  }

  render() {
    const {
      appointments,
      ...other
    } = this.props;

    return(
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}
             show={this.state.showAppointmentsModal}
             onHide={this.toggleAppointmentsModal}
             container={this}
      >
        <Modal.Header closeButton>
          <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
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

AppointmentsPage.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.array,
};

AppointmentsPage.defaultProps = {
};

export default AppointmentsPage;
