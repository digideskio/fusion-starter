import React, {Component, PropTypes} from 'react';
import { Button,Panel,ButtonToolbar,SplitButton,MenuItem } from 'react-bootstrap';
import EntypoPhone from 'react-entypo/lib/entypo/Phone';
import EntypoMan from 'react-entypo/lib/entypo/Man';
import EntypoMail from 'react-entypo/lib/entypo/Mail';
import EntypoEmail from 'react-entypo/lib/entypo/Email';
import EntypoLandline from 'react-entypo/lib/entypo/Landline';
import EntypoFlag from 'react-entypo/lib/entypo/Flag';
import EntypoCalendar from 'react-entypo/lib/entypo/Calendar';


class AppointmentsActivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityOpen: false
    }
  }

  openActivity = () => setState({ activityOpen: !this.state.activityOpen });

  editActivity = () => {
    console.log(this.props.time + ' : EDIT');
  };
  confirmActivity = () => {
    console.log(this.props.time + ' : CONFIRM');
  };
  completeActivity = () => {
    console.log(this.props.time + ' : COMPLETE');
  };
  missedActivity = () => {
    console.log(this.props.time + ' : MISSED');
  };
  cancelActivity = () => {
    console.log(this.props.time + ' : CANCEL');
  };

  render() {
    const {
      time,
      apptLastUpdatedBy,
      apptCreatedBy,
      apptConfirmedBy,
      vehicle,
      apptDescription,
      apptNotes,
      apptType,
      apptStatus,
      isUrgent,
      key
    } = this.props;

    const icon = {
      'meeting': <EntypoMan valign />,
      'phone': <EntypoPhone valign />,
      'email': <EntypoEmail valign />,
      'letter': <EntypoMail valign />,
      'fax': <EntypoLandline valign />,
      'other': <EntypoCalendar valign />,
      'service': <svg viewBox="0 0 18 18" preserveAspectRatio="xMidYmid meet" style={{'display':'inline-block','height':'1em','width':'1em','fill':'currentColor','userSelect':'none','valign':'text-top'}}><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="icons" transform="translate(-448.000000, -666.000000)"><path d="M454.513082,682.881436 C453.97807,683.4171 453.350374,683.764948 452.62833,683.925536 C451.906285,684.086124 451.224755,684.04556 450.58263,683.804956 L452.828682,681.556169 L452.307544,679.70913 L450.462752,679.186802 L448.2167,681.435589 C447.975833,680.766565 447.935874,680.077538 448.096267,679.36795 C448.256659,678.658362 448.603529,678.036015 449.139096,677.500351 C450.154731,676.456251 451.370718,676.122295 452.788722,676.496815 L458.524007,670.794554 C458.122748,669.375934 458.444089,668.157911 459.486363,667.140483 C460.02082,666.605375 460.649626,666.256972 461.37167,666.096384 C462.093715,665.935796 462.775245,665.975804 463.416815,666.216964 L461.170763,668.465751 L461.692456,670.31279 L463.537248,670.834562 L465.7833,668.585775 C466.024167,669.228127 466.064126,669.911042 465.903733,670.633966 C465.743341,671.356889 465.395361,671.985905 464.860904,672.521013 C464.379726,673.003333 463.804199,673.331177 463.136544,673.505101 C462.467779,673.679025 461.825654,673.685693 461.211278,673.525105 L455.515952,679.227366 C455.890016,680.645986 455.555911,681.864565 454.513082,682.881436" /></g></g></svg>
    };

    const appNotesSample = appNotes;

    return (
      <Panel className={"activityItem" + ((alert) ? " activityItem--alert " : null )} onClick={this.openActivity} collapsible expanded={this.state.activityOpen} >
        <div className="activityItem__icon">{icon[apptType]}</div>
        <div className="activityItem__meta">
          <h5 className="activityItem__heading">{((isUrgent)?<EntypoFlag className="activityItem__urgent" /> : null) + time}</h5>
          <span className={'activityItem__status' + ((apptStatus)?' '+apptStatus : null)}>{apptStatus}</span>
          <span className="activityItem__meta-item">Last updated by {apptLastUpdatedBy}</span>
          <span className="activityItem__meta-item">Created by {apptConfirmedBy}</span>
          <span className="activityItem__meta-item">Confirmed by {apptCreatedBy}</span>
        </div>
        <div className="activityItem__info">
          <h5 className="activityItem__heading">{vehicle}</h5>
          <span className="activityItem__description">{apptDescription}</span>
          <p className="activityItem__notes">
            { (this.state.activityOpen) ? apptNotes : appNotesSample }
          </p>
        </div>
        <ButtonToolbar className="activityItem__buttons">
          <SplitButton bsStyle="default" title="Edit" id={'activityItem'+key} onClick={this.editActivity}>
            <MenuItem eventKey="1" onSelect={this.confirmActivity}>Confirm</MenuItem>
            <MenuItem eventKey="2" onSelect={this.completeActivity}>Complete</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4" onSelect={this.missedActivity}>Mark as Missed</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="5" onSelect={this.cancelActivity}>Cancel</MenuItem>
          </SplitButton>
          <Button bsStyle="primary" onClick={this.completeActivity}>Edit</Button>
        </ButtonToolbar>
      </Panel>
    );
  }
}

AppointmentsActivityItem.propTypes = {
  time: React.PropTypes.string.isRequired, //
  apptLastUpdatedBy: React.PropTypes.string,
  apptCreatedBy: React.PropTypes.string,
  apptConfirmedBy: React.PropTypes.string,
  vehicle: React.PropTypes.string.isRequired, //
  apptDescription: React.PropTypes.string,
  apptNotes: React.PropTypes.string,
  apptType: React.PropTypes.string.oneOf(['meeting','phone','email','letter','fax','other','service']).isRequired, //
  apptStatus: React.PropTypes.string.oneOf(['Not Confirmed','Confirmed','Past Due','Service Appointment','Missed','Cancelled']).isRequired, //
  isUrgent: React.PropTypes.bool,
  key: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]);
};

export default AppointmentsActivityItem;
