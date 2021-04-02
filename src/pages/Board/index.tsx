import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Board: FC = () => {
  const { fetchedData, isFetching, error } = useTypedSelector((state) => {
    return state.launches;
  });
  return <div>{isFetching}</div>;
};
