import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

// import styles from './dealer.scss';

/*
 AppointmentsPage component.

 Standard Use: <AppointmentsPage id={unique id} appointments={data} />

 Requires: React, React-Bootstrap, React-Entypo

 Parameters:
   id: string
      -unique id related to component, Required

   appointments: formatted Array
      - An array of values pertaining to an individual customer's appointments, Required
      [
       {
       id: number
          - unique id of appointment

       time: string

       type: string,
       status: string,
       vehicle: object
         {
           id: number,
           year: number,
           make: string,
           model: string
       }
     }]

 */

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentsModal: false
    };
  }

  toggleAppointmentsModal(){
    this.setState({appointmentsModal: !this.state.appointmentsModal});
  }

  render() {
    const {
      appointments,
      ...other
    } = this.props;

    return(
      <Modal dialogClassName="modal-full" className="appointmentscard__fullpage" {...other}>
        <Modal.Header closeButton>
          <Modal.Title className="display-4">Kyla Gonzalez</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          <div className="appointmentsPage__content">
            {appointments}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

AppointmentsPage.propTypes = {
  id: PropTypes.string.isRequired,
  appointments: PropTypes.array,
};

AppointmentsPage.defaultProps = {
};

export default AppointmentsPage;
