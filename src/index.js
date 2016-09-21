import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore'; // eslint-disable-line import/default
import MainLayout from './components/layouts/MainLayout';
import {loadCustomer} from './actions/customerActions';
import {loadDealerTeam} from './actions/dealerTeamActions';
import 'fusion-theme/dist/fusion-theme.min.css'; // eslint-disable-line
import './styles/index.scss';

const store = configureStore();
store.dispatch(loadCustomer());
store.dispatch(loadDealerTeam());

render(
    <MainLayout store={store} />
  , document.getElementById('app')
);
