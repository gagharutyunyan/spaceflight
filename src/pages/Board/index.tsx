import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { FlightList } from '../../components/FlightList';
import { FlightElement } from '../../components/FlightElement';
import { routes, redirectingRoutes } from '../../api/boardRoutesData';
import { BoardNavigation } from '../../components/BoardNavigation';

export const Board: FC = () => {
  return (
    <>
      <Route path="/board" render={() => <BoardNavigation />} />
      {routes.map((route) => {
        return (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            render={() => <FlightList fetchAsync={route.fetchAsync()} />}
          />
        );
      })}
      {redirectingRoutes.map((route) => {
        return (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            render={() => <Redirect to={route.redirectTo} />}
          />
        );
      })}

      <Route
        exact
        path="/flight/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <FlightElement itemId={id} />;
        }}
      />
    </>
  );
};
