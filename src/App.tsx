import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { store } from './store';

import { Navigation } from './components/Navigation';
import { Main } from './pages/Main';

export const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Redirect to="/board" />
      <Navigation />
      <Main />
    </Provider>
  );
};
