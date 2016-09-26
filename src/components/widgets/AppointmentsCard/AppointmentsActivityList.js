import React, {PropTypes} from 'react';
import { Button, Clearfix, Collapse} from 'react-bootstrap';
import EntypoPlus from 'react-entypo/lib/entypo/Plus';
import AppointmentsActivityItem from './AppointmentsActivityItem';


class AppointmentsActivityList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activityListOpen: false
    };
  }

  toggleList = () => {
    this.setState({ activityListOpen: !this.state.activityListOpen});
  };

  // get appointments from an index range, supply an ID, output an activity item.
  appointmentItems = (startIndex, limit, arr, ident) => {
    let counter = 1;
    let index = startIndex;
    const appts = [];
    const counterLimit = limit || arr.length;
    while (counter <= counterLimit) {
      const appt = arr[index];
      if (!appt) break;
      appts.push(<AppointmentsActivityItem htmlId={ident + '-' + index} key={index} appointment={appt} />);
      counter++;
      index++;
    }
    return appts;
  };

  render(){
    const {
      htmlId,
      listtype,
      appointments
    } = this.props;
    const isCurrent = (listtype === 'current');

    return (

      <div className={"activityList m-b activityList-" + ((isCurrent) ? 'current' : 'history')} id={htmlId}>
        <div className="activityList__header">
          <h5 className="activityList__header-title">{ (isCurrent) ? 'Current Activity' : 'History' } <span className="activityList__header-count">({appointments.length})</span></h5>
          { isCurrent ?
          <Button className="activityList__header-button activityList__addtask" ><EntypoPlus valign/></Button>
            :
            null
          }
          <Clearfix/>
        </div>

        <div className={'activityList__list-container' + ((appointments.length === 0) ? '--notasks' : '' )}>
          {isCurrent ?
          <span style={{"display":"none"}}>ManageActivityList thingy goes here.</span>
            :
          null
          }

          { appointments.length > 0 ?
          (isCurrent ?
            <div className="activityList__list">
              { this.appointmentItems(0, appointments.length, appointments, listtype) }
            </div>
            :
            <div className="activityList__list">
              <div className="activityList__list-initial">
              { this.appointmentItems(0, 3, appointments, listtype) }
              </div>
              <Collapse in={this.state.activityListOpen} className="activityList__list-overflow">
                <div>
                { this.appointmentItems(3, appointments.length, appointments, listtype) }
                </div>
              </Collapse>
              { appointments.length > 3 && <Button className="activityList__expand-button" block onClick={this.toggleList}>{this.state.activityListOpen ? 'Show Less' : 'Show More'}</Button> }
            </div>
          )
            :
          <i className="text-muted">{ (isCurrent) ? 'There are no active appointments.' : 'There is no appointment history.' }</i>
          }
        </div>
      </div>
    );
  }
}

AppointmentsActivityList.propTypes = {
  htmlId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  listtype: PropTypes.oneOf(['current','history']).isRequired,
  appointments: PropTypes.array.isRequired
};

export default AppointmentsActivityList;
