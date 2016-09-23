<<<<<<< HEAD
import React, {PropTypes} from 'react';
=======
import React, {Component, PropTypes } from 'react';
import { EntypoPhone, EntypoEmail, EntypoMail, EntypoLandline, EntypoCalendar, EntypoBriefcase } from 'react-entypo';

import {formatDate} from '../../../utils/formatDate';

>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
import Card from '../Card';
import AppointmentsPage from './AppointmentsPage';
// import styles from './styles.scss';

<<<<<<< HEAD
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
=======
class AppointmentsCard extends Component {
  constructor(props) {
    super(props);

    this.statusClass = {
      "Not Confirmed": "",
      "Confirmed": "text-success",
      "Missed": "text-warning",
      "Past Due": "text-danger",
      "Complete": ""
    };

    this.appointmentIcon = {
      "Meeting": <EntypoBriefcase valign/>,
      "Phone": <EntypoPhone valign/>,
      "Other": <EntypoCalendar valign/>,
      "Fax": <EntypoLandline valign/>,
      "Letter": <EntypoMail valign/>,
      "Email": <EntypoEmail valign/>
    };

    this.appointmentsActions = [
      { label: 'Add Appointments', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
      { label: "Confirm", disabled: true, header: false, href: 'http://google.com', onClick: null, onSelect: null },
      { label: "Complete", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
      { label: '', divider: true },
      { label: "Edit", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
      { label: "Mark as Missed", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
      { label: '', divider: true },
      { label: "Cancel", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null }
    ];
  }

  getPrimaryAppointment(){
    const {
      appointments
    } = this.props;
    const appointment = appointments[0];

    const appointmentStatusClass = this.statusClass[appointment.status];
    const appointmentTypeIcon = this.appointmentIcon[appointment.type];

    const appointmentVehicleYear = appointment.vehicle.year;
    const appointmentVehicleMake = appointment.vehicle.make;
    const appointmentVehicleModel = appointment.vehicle.model;

    const appointmentDateTime = formatDate(appointment.time);

    return(
      <div>
        <div className="appointmentscard__icon">{appointmentTypeIcon}</div>
        <div className="appointmentscard__details">
          <h5 className="appointmentscard__time">{appointmentDateTime}</h5>
          <div className={"appointmentscard__status " + appointmentStatusClass}>{appointment.status}</div>
          <div className="appointmentscard__vehicle">
            <div className="appointmentscard__vehicle--makeyear">{appointmentVehicleYear} {appointmentVehicleMake}</div>
            <div className="appointmentscard__vehicle--model">{appointmentVehicleModel}</div>
          </div>
        </div>
      </div>
      );
  }

  render() {
    const {
      appointments,
      emptyText,
    } = this.props;

    const appointmentsCount = appointments.length;
    const headerCounter = (appointmentsCount <= 0 ) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (appointmentsCount <= 0 ) ? emptyText : this.getPrimaryAppointment();

    return (
      <div>
        <Card header={"Appointments " + headerCounter}
            className="appointmentscard"
            actionDropdown={this.appointmentsActions}
        >
          {cardContent}
        </Card>

        <AppointmentsPage id="appointmentsCard-appointmentsPage" appointments={appointments}/>
      </div>
>>>>>>> 9f4bac2144b4c3c4622617ab39a679c2dd16bb14
    );
  }
}
AppointmentsCard.propTypes = {
  appointments: React.PropTypes.array.isRequired
};

export default AppointmentsCard;
