import React, {Component, PropTypes} from 'react';
import { Button,Panel,ButtonToolbar,SplitButton,MenuItem,Col,Row } from 'react-bootstrap';
import EntypoPhone from 'react-entypo/lib/entypo/Phone';
import EntypoMan from 'react-entypo/lib/entypo/Man';
import EntypoMail from 'react-entypo/lib/entypo/Mail';
import EntypoEmail from 'react-entypo/lib/entypo/Email';
import EntypoLandline from 'react-entypo/lib/entypo/Landline';
import EntypoFlag from 'react-entypo/lib/entypo/Flag';
import EntypoCalendar from 'react-entypo/lib/entypo/Calendar';

import {formatDateTime} from '../../../utils/formatDateTime';

class AppointmentsActivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityOpen: false
    };
  }

  openActivity = () => this.setState({ activityOpen: !this.state.activityOpen });

  stopProp = (e) => {
    e.stopPropagation();
  }

  editActivity = () => {
    // edit function
  };
  confirmActivity = () => {
    // confirm function
  };
  completeActivity = () => {
    // complete function
  };
  missedActivity = () => {
    // missed function
  };
  cancelActivity = () => {
    // cancel function
  };

  render() {
    const id = this.props.htmlId;
    const appointment = this.props.appointment;
    const icon = {
      'Meeting': <EntypoMan valign />,
      'Phone': <EntypoPhone valign />,
      'Email': <EntypoEmail valign />,
      'Letter': <EntypoMail valign />,
      'Fax': <EntypoLandline valign />,
      'Other': <EntypoCalendar valign />,
      'Service': <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYmid meet" style={{'display':'inline-block','height':'1em','width':'1em','fill':'currentColor','userSelect':'none','valign':'text-top'}}><g stroke="none" strokeWidth="1" fillRule="evenodd"><g id="icons" transform="translate(-448.000000, -666.000000)"><path d="M454.513082,682.881436 C453.97807,683.4171 453.350374,683.764948 452.62833,683.925536 C451.906285,684.086124 451.224755,684.04556 450.58263,683.804956 L452.828682,681.556169 L452.307544,679.70913 L450.462752,679.186802 L448.2167,681.435589 C447.975833,680.766565 447.935874,680.077538 448.096267,679.36795 C448.256659,678.658362 448.603529,678.036015 449.139096,677.500351 C450.154731,676.456251 451.370718,676.122295 452.788722,676.496815 L458.524007,670.794554 C458.122748,669.375934 458.444089,668.157911 459.486363,667.140483 C460.02082,666.605375 460.649626,666.256972 461.37167,666.096384 C462.093715,665.935796 462.775245,665.975804 463.416815,666.216964 L461.170763,668.465751 L461.692456,670.31279 L463.537248,670.834562 L465.7833,668.585775 C466.024167,669.228127 466.064126,669.911042 465.903733,670.633966 C465.743341,671.356889 465.395361,671.985905 464.860904,672.521013 C464.379726,673.003333 463.804199,673.331177 463.136544,673.505101 C462.467779,673.679025 461.825654,673.685693 461.211278,673.525105 L455.515952,679.227366 C455.890016,680.645986 455.555911,681.864565 454.513082,682.881436" /></g></g></svg>
    };
    const historical = (['Missed','Cancelled','Completed'].indexOf(appointment.status) > -1);
    const appointmentTime = formatDateTime(appointment.time);

    return (
      <Panel className={"activityItem" + ((appointment.status === 'Past Due') ? " activityItem--past-due " : "") + ((this.state.activityOpen) ? " activityItem--open" : " activityItem--closed") + ((historical) ? ' activityItem--historical' : '')} onClick={this.openActivity} id={id}>
        <Row>
          <Col className="activityItem__meta-cont" lg={5} md={5} sm={5} xs={5}>
            <div className="activityItem__icon">{icon[appointment.type]}</div>

            <div className="activityItem__meta">
              <h5 className="activityItem__heading">{((appointment.isUrgent)?<EntypoFlag className="activityItem__urgent" /> : null)}{appointmentTime}</h5>
              <div className={'activityItem__status' + ((appointment.status)?' '+appointment.status : null)}>{appointment.status}</div>
              <small className="activityItem__meta-list">
                { (appointment.editors.lastUpdatedBy) ?
                <span className="activityItem__meta-item">Last updated by {appointment.editors.lastUpdatedBy}</span>
                  : null }
                { (appointment.editors.confirmedBy) ?
                <span className="activityItem__meta-item">Created by {appointment.editors.confirmedBy}</span>
                  : null }
                { (appointment.editors.createdBy) ?
                <span className="activityItem__meta-item">Confirmed by {appointment.editors.createdBy}</span>
                  : null }
              </small>
            </div>
          </Col>

          <Col className="activityItem__info-cont" lg={7} md={7} sm={7} xs={7}>

            { (!historical && appointment.status !== 'Service Appointment') ?
            <ButtonToolbar className="activityItem__buttons" onClick={this.stopProp}>
              <SplitButton bsStyle="default" title="Edit" id={id+'_activityItemMenu'} onClick={this.editActivity}>
                <MenuItem eventKey="1" onSelect={this.confirmActivity} disabled={(appointment.status === 'Confirmed')}>Confirm</MenuItem>
                <MenuItem eventKey="2" onSelect={this.completeActivity} disabled={(appointment.status === 'Completed')}>Complete</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4" onSelect={this.missedActivity} disabled={(appointment.status === 'Missed')}>Mark as Missed</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="5" onSelect={this.cancelActivity} disabled={(appointment.status === 'Cancelled')}>Cancel</MenuItem>
              </SplitButton>
              <Button bsStyle="primary" onClick={this.completeActivity}>Complete</Button>
            </ButtonToolbar>
              :
            <ButtonToolbar className="activityItem__buttons invisible">
              <SplitButton bsStyle="default" title="Edit" id={id+'_activityItemMenu'} disabled />
              <Button bsStyle="primary" disabled>Complete</Button>
            </ButtonToolbar>
            }

            <div className="activityItem__info">
              <h5 className="activityItem__heading">{appointment.vehicle.year + ' ' + appointment.vehicle.make + ' ' + appointment.vehicle.model}</h5>
              <div className="activityItem__description"><small>{(appointment.description) ? appointment.description : <i className="text-muted">no description provided</i> }</small></div>
              <small className="activityItem__notes">{(appointment.notes) ? appointment.notes : <i className="text-muted">no appointment notes provided</i> }</small>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

AppointmentsActivityItem.propTypes = {
  htmlId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  appointment: PropTypes.shape({
    appointmentId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    editors: PropTypes.shape({
      lastUpdatedBy: PropTypes.string,
      createdBy: PropTypes.string,
      confirmedBy: PropTypes.string
    }).isRequired,
    time: PropTypes.string.isRequired,
    vehicle: PropTypes.shape({
      vehicleId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      year: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string
    }).isRequired,
    description: PropTypes.string,
    notes: PropTypes.string,
    type: PropTypes.oneOf(['Meeting','Phone','Email','Letter','Fax','Other','Service']).isRequired,
    status: PropTypes.oneOf(['Not Confirmed','Confirmed','Past Due','Service Appointment','Missed','Cancelled','Completed']).isRequired,
    isUrgent: PropTypes.bool
  }).isRequired
};

export default AppointmentsActivityItem;
