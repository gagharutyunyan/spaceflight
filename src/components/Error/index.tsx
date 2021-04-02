import React, { FC } from 'react';

type PropTypes = {
  error: string | false;
};

export const Error: FC<PropTypes> = ({ error }: PropTypes) => {
  return error ? <p>{error}</p> : null;
};
