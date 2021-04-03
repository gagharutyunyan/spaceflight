import React, { FC } from 'react';

import { IFlight } from '../../types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li``;
const StyledLink = styled(Link)``;

type PropTypes = {
  flight: IFlight;
};

export const FlightLink: FC<PropTypes> = ({ flight }: PropTypes) => {
  return (
    <List>
      <StyledLink to={`/board/${flight.id}`}>{flight.name}</StyledLink>
    </List>
  );
};
