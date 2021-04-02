import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Board: FC = () => {
  const { data, isFetching, error } = useTypedSelector((state) => {
    return state.launches;
  });
  console.log(data);
  return <div>something</div>;
};
