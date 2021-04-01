import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from './saga/init/store';
import { FlightList } from './pages/FlightList';
import { Booking } from './pages/Booking';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <FlightList />
      <Booking />
    </Provider>
  );
};
