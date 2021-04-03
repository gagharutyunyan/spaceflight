import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type PropTypes = {
  itemId: string;
};

export const FlightElement: FC<PropTypes> = ({ itemId }: PropTypes) => {
  const element = useTypedSelector((state) =>
    state.launches.fetchedData.results.find((el) => el.id === itemId)
  );
  return <h1>{element?.name}</h1>;
};
