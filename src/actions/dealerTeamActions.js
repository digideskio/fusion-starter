import * as types from './actionTypes';
import {getDealerTeam} from '../api/api';

export function loadDealerTeamSuccess(dealerTeam) {
  return { type: types.LOAD_DEALER_TEAM_SUCCESS, dealerTeam};
}

export function loadDealerTeam(dealerId) {
  return function (dispatch) {
    getDealerTeam(dealerId).then(response => {
      dispatch(loadDealerTeamSuccess(response.data));
    });
  };
}
