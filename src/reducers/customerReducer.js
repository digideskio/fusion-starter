import {LOAD_CUSTOMER_SUCCESS} from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(customer = initialState.customer, action) {
  switch (action.type) {
    case LOAD_CUSTOMER_SUCCESS:
      return action.customer;

    default:
      return customer;
  }
}
