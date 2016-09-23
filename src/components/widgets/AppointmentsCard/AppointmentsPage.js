import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
<<<<<<< HEAD
import AppointmentsActivityItem from './AppointmentsActivityItem';

=======
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
// import styles from './dealer.scss';

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      appointmentsModal: false
=======
      showAppointmentsModal: false
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
    };
  }

  toggleAppointmentsModal(){
<<<<<<< HEAD
    this.setState({appointmentsModal: !this.state.appointmentsModal});
=======
    this.setState({showAppointmentsModal: !this.state.showAppointmentsModal});
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
  }

  render() {
    const {
      appointments,
      ...other
    } = this.props;

    return(
<<<<<<< HEAD
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
=======
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}
             show={this.state.showAppointmentsModal}
             onHide={this.toggleAppointmentsModal}
             container={this}
      >
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
        <Modal.Header closeButton>
          <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
<<<<<<< HEAD
            Content here.
            <br/>

            {/* <AppointmentsActivityItem appointment={appointments[1]} id="1" key={1}/> */}

=======
            <AppointmentsPage id="appointmentsCard-appointmentsPage" appointments={appointments}/>
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
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
