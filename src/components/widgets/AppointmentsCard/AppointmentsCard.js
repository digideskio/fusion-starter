import React, {PropTypes} from 'react';
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

class AppointmentsCard extends React.Component {
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
        <h5>{(this.props.appointments[0].time)? this.props.appointments[0].time : 'no time'}</h5>
        many appointments.
        such busy.
        so work.

        <AppointmentsPage
          show={this.state.appointmentsModal}
          onHide={this.toggleAppointmentsModal}
          appointments={this.props.appointments}
          id="CR_AppointmentsPage"
        />
      </Card>
    );
  }
}
AppointmentsCard.propTypes = {
  appointments: React.PropTypes.array.isRequired
};

export default AppointmentsCard;
