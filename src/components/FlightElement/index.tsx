import React, { FC } from 'react';

import { IFlight } from '../../types';

export const FlightElement: FC<IFlight> = (flight: IFlight) => {
  return <h6>{flight.id}</h6>;
};
