import React, {PropTypes} from 'react';

const AppointmentsCardContent = ({appointment, appointmentTypeIcon, appointmentDateTime, appointmentStatusClass, visible, toggleVisibility}) => {
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
};

AppointmentsCardContent.propTypes = {
  id: PropTypes.string.isRequired,
  appointment: PropTypes.object.isRequired,
  appointmentTypeIcon: PropTypes.object,
  appointmentDateTime: PropTypes.string,
  appointmentStatusClass: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired
};


export default AppointmentsCardContent;
