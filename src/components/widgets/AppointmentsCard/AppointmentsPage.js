import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

// import styles from './dealer.scss';

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsModal: false
    };
  }

  toggleAppointmentsModal(){
    this.setState({appointmentsModal: !this.state.appointmentsModal});
  }

  render() {
    const {
      appointments,
      ...other
    } = this.props;

    return(
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
        <Modal.Header closeButton>
          <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
            {appointments}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AppointmentsPage.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.object,
};

AppointmentsPage.defaultProps = {
};

export default AppointmentsPage;
