import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { Board } from './pages/Board';
import { Booking } from './pages/Booking';

export const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Board />
      <Booking />
    </Provider>
  );
};
