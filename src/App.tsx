import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { store } from './store';
import { Board } from './pages/Board';
import { Booking } from './pages/Booking';
import { FlightList } from './components/FlightList';
import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from './store/actions/launchesActions';

export const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Link to="/">home</Link>
      <Link to="/board">Board</Link>
      <Link to="/booking">booking</Link>
      <Link to="/board/next">next</Link>
      <Link to="/board/past">past</Link>
      <Route path="/board" component={Board} />

      <Route
        path="/board/next"
        render={() => <FlightList fetchAsync={nextLaunchesFetchAsync()} />}
      />
      <Route
        path="/board/past"
        render={() => <FlightList fetchAsync={pastLaunchesFetchAsync()} />}
      />
      <Route exact path="/booking" render={() => <Booking />} />
    </Provider>
  );
};
