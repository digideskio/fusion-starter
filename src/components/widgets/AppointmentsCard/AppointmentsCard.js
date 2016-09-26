import React, {Component, PropTypes } from 'react';
import EntypoPhone from 'react-entypo/lib/entypo/Phone';
import EntypoEmail from 'react-entypo/lib/entypo/Email';
import EntypoMail from 'react-entypo/lib/entypo/Mail';
import EntypoLandline from 'react-entypo/lib/entypo/Landline';
import EntypoCalendar from 'react-entypo/lib/entypo/Calendar';
import EntypoBriefcase from 'react-entypo/lib/entypo/Briefcase';

import {formatDateTime} from '../../../utils/formatDateTime';

import Card from '../Card';
import AppointmentsCardContent from './AppointmentsCardContent';
import AppointmentsModal from './AppointmentsModal';
// import styles from './styles.scss';

class AppointmentsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.dropdownConfirmDisabled = (typeof(this.props.appointments[0]) === 'undefined') ? true : false;

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
      { label: 'Add Appointments', disabled: false, header: false, onClick: this.toggleVisibility, onSelect: null },
      { label: "Confirm", disabled: this.dropdownConfirmDisabled, header: false, onClick: null, onSelect: null },
      { label: "Complete", disabled: false, header: false, onClick: null, onSelect: null },
      { label: '', divider: true },
      { label: "Edit", disabled: false, header: false, onClick: this.toggleVisibility, onSelect: null },
      { label: "Mark as Missed", disabled: false, header: false, onClick: null, onSelect: null },
      { label: '', divider: true },
      { label: "Cancel", disabled: false, header: false, onClick: null, onSelect: null }
    ];
  }

  toggleVisibility = (event) => {
    event.preventDefault();
    this.setState({visible: !this.state.visible});
  };

  getPrimaryAppointment(){
    const {
      appointments
    } = this.props;
    const appointment = appointments[0];

    const appointmentStatusClass = this.statusClass[appointment.status];
    const appointmentTypeIcon = this.appointmentIcon[appointment.type];

    const appointmentDateTime = formatDateTime(appointment.time);

    return(
      <AppointmentsCardContent id="appointmentsCard-appointmentsCardContent"
                               appointment={appointment}
                               appointmentTypeIcon={appointmentTypeIcon}
                               appointmentDateTime={appointmentDateTime}
                               appointmentStatusClass={appointmentStatusClass}
                               visible={this.state.visible}
                               toggleVisibility={this.toggleVisibility}
      />
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
    const headerCounter = (appointmentsCount <= 1) ? "" : "(" + appointmentsCount + ")";
    const cardContent = (typeof(appointments[0]) === 'undefined') ? emptyText : this.getPrimaryAppointment();

    return (
      <div id={id}>
        <Card header={"Appointments " + headerCounter}
            className="appointmentscard"
            actionDropdown={this.appointmentsActions}
        >
          {cardContent}
        </Card>

        <AppointmentsModal
          id="appointmentsCard-appointmentsModal"
          customerName={customerName}
          appointments={appointments}
          visible={this.state.visible}
          toggleVisibility={this.toggleVisibility}
        />
      </div>
    );
  }
}
AppointmentsCard.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.shape({
    appointmentId: PropTypes.number,
    time: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    vehicle: PropTypes.shape({
      vehicleId: PropTypes.number,
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
