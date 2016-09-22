import React, {Component, PropTypes } from 'react';
import { EntypoPhone, EntypoEmail, EntypoMail, EntypoLandline, EntypoCalendar, EntypoBriefcase } from 'react-entypo';
import moment from 'moment';

import Card from '../Card';
import AppointmentsPage from './AppointmentsPage';
// import styles from './dealer.scss';

/*
 AppointmentsCard component.
 Requires: React, React-Bootstrap, React-Entypo, moment is used for parsing and quick format of date/time

 Parameters:
 [prop] :: [prop type]
 - description
*/

const appointmentIcon = {
  "Meeting": <EntypoBriefcase valign/>,
  "Phone": <EntypoPhone valign/>,
  "Other": <EntypoCalendar valign/>,
  "Fax": <EntypoLandline valign/>,
  "Letter": <EntypoMail valign/>,
  "Email": <EntypoEmail valign/>
};

const statusClass = {
  "Not Confirmed": "",
  "Confirmed": "text-success",
  "Missed": "text-warning",
  "Past Due": "text-danger",
  "Complete": ""
};

const actions = [
  { label: 'Add Appointments', disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Confirm", disabled: true, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Complete", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: '', divider: true },
  { label: "Edit", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: "Mark as Missed", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null },
  { label: '', divider: true },
  { label: "Cancel", disabled: false, header: false, href: 'http://google.com', onClick: null, onSelect: null }
];

class AppointmentsCard extends Component {
  constructor(props) {
    super(props);
  }

  getPrimaryAppointment(){
    const {
      appointments
    } = this.props;
    const appointment = appointments[0];

    const appointmentStatusClass = statusClass[appointment.status];
    const appointmentTypeIcon = appointmentIcon[appointment.type];

    const appointmentVehicleYear = appointment.vehicle.year;
    const appointmentVehicleMake = appointment.vehicle.make;
    const appointmentVehicleModel = appointment.vehicle.model;
    const appointmentDateTime = moment(Date.parse(appointment.time)).format("M/DD/YY hh:mm a");

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
      appointmentsActions,
      emptyText
    } = this.props;
    const appointmentsCount = appointments.length;
    const headerCounter = (appointmentsCount <= 0 ) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (appointmentsCount <= 0 ) ? emptyText : this.getPrimaryAppointment();

    return (
      <span>
        <Card header={"Appointments " + headerCounter}
            onClick={this.toggleAppointmentsModal}
            className="appointmentscard"
            actionDropdown={appointmentsActions}
        >
          {cardContent}
        </Card>

        <AppointmentsPage id="appointmentsCard-appointmentsPage"/>
      </span>
    );
  }
}

AppointmentsCard.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    time: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    vehicle: PropTypes.shape({
      id: PropTypes.number,
      year: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string
    })
  })).isRequired,
  appointmentsActions: PropTypes.array,
  emptyText: PropTypes.string
};

AppointmentsCard.defaultProps = {
  appointmentsActions: actions,
  emptyText: "Add an appointment"
};

export default AppointmentsCard;
