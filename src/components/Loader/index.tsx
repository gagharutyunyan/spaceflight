import React, { FC } from 'react';

type PropTypes = {
  isFetching: boolean;
};

export const Loader: FC<PropTypes> = ({ isFetching }: PropTypes) => {
  return isFetching ? <p>Loading data from API...</p> : null;
};
