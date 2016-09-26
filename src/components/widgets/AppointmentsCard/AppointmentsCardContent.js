import React, {PropTypes} from 'react';

const AppointmentsCardContent = ({htmlId, appointment, appointmentTypeIcon, appointmentDateTime, appointmentStatusClass}) => {
  return(
    <div id={htmlId}>
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
  htmlId: PropTypes.string.isRequired,
  appointment: PropTypes.object.isRequired,
  appointmentTypeIcon: PropTypes.object,
  appointmentDateTime: PropTypes.string,
  appointmentStatusClass: PropTypes.string
};


export default AppointmentsCardContent;
