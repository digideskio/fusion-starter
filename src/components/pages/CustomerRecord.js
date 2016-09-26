import React, {PropTypes} from 'react';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';
import { Affix } from 'react-overlays';

import CustomerProfile from '../widgets/CustomerProfile';
import ActionBar from '../widgets/ActionBar';
import Tasks from '../widgets/Tasks';

import DealerCard from '../widgets/DealerCard/DealerCard';
import AppointmentsCard from '../widgets/AppointmentsCard/AppointmentsCard';

const CustomerRecord = ({customer, dealerTeam}) => {
  return(
    <Grid className="customerrecord customerrecord__page">

      <Affix viewportOffsetTop={0} affixClassName="customerrecord__head--fixed customerprofile--collapsed">
        <div className="customerrecord__head m-b-md">
          <CustomerProfile customer={customer} />
          <ActionBar/>
        </div>
      </Affix>

      <Col sm={12} md={12} lg={12}>
        {/* Tasks */}
        {/* <Tasks tasks={customer.tasks} className="customerrecord__tasks m-b-md" /> */}

        {/* Cards */}
        <Row className="customerrecord__cards m-b-md">
          <Col lg={4} md={4} sm={4} xs={6}>
            <AppointmentsCard
              htmlId="customer-record-appointments-card"
              appointments={customer.appointments}
              customerName={customer.firstName + " " + customer.lastName}
            />
          </Col>

          <Col lg={4} md={4} sm={4} xs={6}>
            { /* <DealerCard dealerTeam={dealerTeam} teamRole="salesperson"/> */ }
          </Col>

          <Clearfix visibleXsBlock/>

          <Col lg={4} md={4} sm={4} xs={6}>
            { /* <AppointmentsCard appointments={[]}/> */ }
          </Col>
        </Row>

        {/* Service/part */}
        <div className="customerrecord__ m-b-md"/>

      </Col>
    </Grid>
  );
};

CustomerRecord.propTypes = {
  customer: PropTypes.shape({
    photo: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postal: PropTypes.string
    }),
    ebr: PropTypes.bool,
    ebrExpressConsent: PropTypes.bool,
    memo: PropTypes.string
  }),
  dealerTeam: PropTypes.array
};

export default CustomerRecord;
