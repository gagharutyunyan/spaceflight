import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { store } from './store';
import { Board } from './pages/Board';
import { Booking } from './pages/Booking';
import { FlightList } from './components/FlightList';
import { FlightElement } from './components/FlightElement';
import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from './store/actions/launchesActions';

export const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Link to="/spaceflight/">home </Link>
      <Link to="/spaceflight/board">Board </Link>
      <Link to="/spaceflight/booking">booking </Link>
      <Link to="/spaceflight/board/next">next </Link>
      <Link to="/spaceflight/board/past">past </Link>
      <Route path="/spaceflight/board" component={Board} />
      <Route
        path="/spaceflight/board/next"
        render={() => <FlightList fetchAsync={nextLaunchesFetchAsync()} />}
      />
      <Route
        path="/spaceflight/board/past"
        render={() => <FlightList fetchAsync={pastLaunchesFetchAsync()} />}
      />
      <Route
        path="/spaceflight/board/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <FlightElement itemId={id} />;
        }}
      />
      <Route exact path="/spaceflight/booking" component={Booking} />
    </Provider>
  );
};
