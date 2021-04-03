import React, { FC } from 'react';

import { IFlight } from '../../types';
import { Link } from 'react-router-dom';

type PropTypes = {
  flight: IFlight;
};

export const FlightLink: FC<PropTypes> = ({ flight }: PropTypes) => {
  return (
    <li>
      <Link to={`/board/${flight.id}`}>{flight.name}</Link>
    </li>
  );
};
