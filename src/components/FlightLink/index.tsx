import React, { FC } from 'react';

import { IFlight } from '../../types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  list-style: none;
  padding: 1px 0 1px 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid black;
  &:hover {
    background-color: palevioletred;
  }
`;

const Photo = styled.img`
  width: 30px;
  height: 30px;
  padding: 0 20px 0 20px;
  &::after {
    content: '';
    border-left: 2px solid black;
    height: 100%;
  }
`;

const FlightNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 41px;
  padding: 0 20px 0 20px;
  &::before {
    position: absolute;
    left: 0;
    content: '';
    border-left: 2px solid black;
    height: 100%;
  }
`;

const FlightName = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  width: 140px;
  height: 41px;
  padding: 0 20px 0 20px;
  &::before {
    position: absolute;
    left: 0;
    content: '';
    border-left: 2px solid black;
    height: 100%;
  }
`;

const FlightDetails = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 38px;
  padding: 3px 20px 0 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 2;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  box-orient: vertical;
  &::before {
    position: absolute;
    left: 0;
    content: '';
    border-left: 2px solid black;
    height: 100%;
  }
`;

type PropTypes = {
  flight: IFlight;
};

export const FlightLink: FC<PropTypes> = ({ flight }: PropTypes) => {
  return (
    <List>
      <StyledLink to={`/flight/${flight.id}`}>
        <Photo src={flight.links.patch.small} />
        <FlightNumber>{flight.flight_number}</FlightNumber>
        <FlightName> {flight.name}</FlightName>
        <FlightDetails>
          {flight.details
            ? flight.details
            : 'Details about launch is absent...'}
        </FlightDetails>
      </StyledLink>
    </List>
  );
};
