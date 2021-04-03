import React, { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useBookingFill } from '../../hooks/useBookingFill';

export const Booking: FC = () => {
  const { pastData, nextData } = useBookingFill();
  console.log(pastData, nextData);
  return <h1>Booking</h1>;
};
