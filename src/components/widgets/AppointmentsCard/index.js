import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import Card from '../Card';
import AppointmentsPage from './AppointmentsPage';
// import styles from './styles.scss';

/*
 AppointmentsCard component.
 Requires: React, React-Bootstrap, React-Entypo

 Parameters:
 [prop] :: [prop type]
 - description

 */

class AppointmentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsModal: false
    };
  }

  toggleAppointmentsModal = () => {
    this.setState({appointmentsModal: !this.state.appointmentsModal});
  };

  render() {
    return (
      <Card header="Appointments" onClick={this.toggleAppointmentsModal} className="appointmentscard">
        many appointments.
        such busy.
        so work.

        <AppointmentsPage
          show={this.state.appointmentsModal}
          onHide={this.toggleAppointmentsModal}
          backdrop={false}
          autoFocus
        />
      </Card>
    );
  }
}
AppointmentCard.propTypes = {};
