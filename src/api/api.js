// This service abstracts away the specific network request tech and config that we're using.
// This keeps all API calls short and consistent.
// If you are already using jQuery, you can use it to make AJAX calls here instead since
// Axios weighs about 20k. But note that jQuery's promise implementation is quirky.
import axios from 'axios';
import getBaseUrl from '../../buildTools/baseUrl';

const api = null;

// Note that this can't be called until we're in the browser
// since we need to sniff the URL to know what environment we're in
// and therefore, what the baseURL should be for API calls.
const getInitializedApi = function() {
  if (api) return api; // return initialized api if already initialized.
  return axios.create({
    baseURL: getBaseUrl(),
    responseType: 'json',
    withCredentials: true
  });
};

const get = function(url) {
  return getInitializedApi().get(url);
};

const post = function(url, data) { // eslint-disable-line no-unused-vars
  return getInitializedApi().post(url, data);
};

// The API calls your app uses go down here. Export each function so they can be imported for use elsewhere...
export function getCustomer(id) {
  // For now, just get the 1 customer returned from the mock API.
  return get('customer');
}

export function getDealerTeam(dealerId) {
  // For now, just get the 1 customer returned from the mock API.
  return get('dealerTeam');
}
