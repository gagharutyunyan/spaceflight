import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { FlightList } from '../../components/FlightList';
import { FlightElement } from '../../components/FlightElement';
import { routes } from '../../api/boardRoutesData';

export const Board: FC = () => {
  return (
    <>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => <FlightList fetchAsync={route.fetchAsync()} />}
          />
        );
      })}

      <Route
        exact
        path="/board/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <FlightElement itemId={id} />;
        }}
      />
    </>
  );
};
