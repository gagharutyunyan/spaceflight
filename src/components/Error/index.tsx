import React, { FC } from 'react';

type PropTypes = {
  error: number;
};

export const Error: FC<PropTypes> = ({ error }: PropTypes) => {
  return error === 404 ? <p>{error}</p> : null;
};
