import {LOAD_DEALER_TEAM_SUCCESS} from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(dealerTeam = initialState.dealerTeam, action) {
  switch (action.type) {
    case LOAD_DEALER_TEAM_SUCCESS:
      return action.dealerTeam;

    default:
      return dealerTeam;
  }
}
