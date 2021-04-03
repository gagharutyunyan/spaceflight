import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
100% { transform: rotate(360deg) }
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  width: 10em;
  height: 10em;
  border-top: 1em solid palevioletred;
  border-right: 1em solid transparent;
  border-radius: 50%;
  margin: auto;
  animation: ${spinner} 0.6s linear infinite;
`;

type PropTypes = {
  isFetching: boolean;
};

export const Loader: FC<PropTypes> = ({ isFetching }: PropTypes) => {
  return isFetching ? <StyledLoader /> : null;
};
