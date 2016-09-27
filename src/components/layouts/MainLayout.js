import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Loading from '../widgets/Loading';
import CustomerRecord from '../pages/CustomerRecord';

const MainLayout = ({customer, dealerTeam}) => {
  debugger;
  return (
    <div className=' main-layout'>
      { customer.globalCustomerId ? <CustomerRecord customer={customer} dealerTeam={dealerTeam} /> : <Loading/> }
    </div>
  );
};

MainLayout.propTypes = {
  customer: PropTypes.object.isRequired,
  dealerTeam: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    customer: state.customer,
    dealerTeam: state.dealerTeam
  };
}

export default connect(mapStateToProps)(MainLayout);
