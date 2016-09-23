import React, {Component, PropTypes } from 'react';
import { EntypoPhone, EntypoEmail, EntypoMail, EntypoLandline, EntypoCalendar, EntypoBriefcase } from 'react-entypo';

import {formatDateTime} from '../../../utils/formatDateTime';

import Card from '../Card';
import AppointmentsModal from './AppointmentsModal';
// import styles from './styles.scss';

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

    const appointmentDateTime = formatDateTime(appointment.time);

    return(
      <div>
        <div className="appointmentscard__icon">{appointmentTypeIcon}</div>
        <div className="appointmentscard__details">
          <h5 className="appointmentscard__time">{appointmentDateTime}</h5>
          <div className={"appointmentscard__status " + appointmentStatusClass}>{appointment.status}</div>
          <div className="appointmentscard__vehicle">
            <div className="appointmentscard__vehicle--makeyear">{appointment.vehicle.year} {appointment.vehicle.make}</div>
            <div className="appointmentscard__vehicle--model">{appointment.vehicle.model} {appointment.vehicle.trim}</div>
          </div>
        </div>
      </div>
      );
  }

  render() {
    const {
      id,
      appointments,
      emptyText,
      customerName
    } = this.props;

    const appointmentsCount = appointments.length;
    const headerCounter = (appointmentsCount <= 0 ) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (appointmentsCount <= 0 ) ? emptyText : this.getPrimaryAppointment();

    return (
      <div id={id}>
        <Card header={"Appointments " + headerCounter}
            className="appointmentscard"
            actionDropdown={this.appointmentsActions}
        >
          {cardContent}
        </Card>

        <AppointmentsModal id="appointmentsCard-appointmentsModal" customerName={customerName} appointments={appointments}/>
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
      model: PropTypes.string,
      trim: PropTypes.string
    })
  })).isRequired,
  emptyText: PropTypes.string,
  customerName: PropTypes.string.isRequired
};

AppointmentsCard.defaultProps = {
  emptyText: "Add an appointment"
};

export default AppointmentsCard;
