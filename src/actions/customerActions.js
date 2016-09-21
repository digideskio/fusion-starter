import * as types from './actionTypes';
import {getCustomer} from '../api/api';

export function loadCustomerSuccess(customer) {
  return { type: types.LOAD_CUSTOMER_SUCCESS, customer};
}

export function loadCustomer(id) {
  return function (dispatch) {
    getCustomer(id).then(response => {
      dispatch(loadCustomerSuccess(response.data));
    });
  };
}
