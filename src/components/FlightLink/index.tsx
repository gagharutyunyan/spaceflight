import React, { FC } from 'react';

import { IFlight } from '../../types';
import { Link } from 'react-router-dom';

export const FlightLink: FC<IFlight> = (flight: IFlight) => {
  return (
    <li>
      <Link to={`${flight.id}`}>{flight.name}</Link>
    </li>
  );
};
