import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { FlightElementType } from '../../types';

export const FlightElement: FC<FlightElementType> = ({
  itemId,
}: FlightElementType) => {
  const element = useTypedSelector((state) =>
    state.launches.fetchedData.results.find((el) => el.id === itemId)
  );
  console.log(element);
  return <h1>{element?.name}</h1>;
};
