import React, {Component, PropTypes } from 'react';
import { EntypoPhone, EntypoEmail, EntypoMail, EntypoLandline, EntypoCalendar, EntypoBriefcase } from 'react-entypo';

import {formatDate} from '../../../utils/formatDate';

import Card from '../Card';
import AppointmentsPage from './AppointmentsPage';
// import styles from './dealer.scss';

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
  emptyText: PropTypes.string
};

AppointmentsCard.defaultProps = {
  emptyText: "Add an appointment"
};

export default AppointmentsCard;
