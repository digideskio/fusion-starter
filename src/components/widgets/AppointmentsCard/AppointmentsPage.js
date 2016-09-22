import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import AppointmentsActivityItem from './AppointmentsActivityItem';

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
            Content here.
            <br/>

            {/* <AppointmentsActivityItem appointment={appointments[1]} id="1" key={1}/> */}

          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AppointmentsPage.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.array,
  customer: PropTypes.string
};

AppointmentsPage.defaultProps = {
};

export default AppointmentsPage;
