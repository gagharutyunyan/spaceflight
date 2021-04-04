import React, { FC } from 'react';
import styled from 'styled-components';
import { NavigationLink } from '../NavigationLink';

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const Navigation: FC = () => {
  return (
    <NavBar>
      <NavigationLink
        linkTo="/board/past"
        linkName="Past and Next Launches"
        fontSize="1.6em"
      />
      <NavigationLink
        linkTo="/booking"
        linkName="Booking Launches"
        fontSize="1.6em"
      />
    </NavBar>
  );
};
