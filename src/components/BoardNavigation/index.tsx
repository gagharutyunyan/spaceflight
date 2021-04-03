import React, { FC } from 'react';
import styled from 'styled-components';
import { NavigationLink } from '../NavLink';

const NavBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoardNavigation: FC = () => {
  return (
    <NavBar>
      <NavigationLink
        linkTo="/board/next"
        linkName="Next Launches"
        fontSize="1.3em"
      />
      <NavigationLink
        linkTo="/board/past"
        linkName="Past Launches"
        fontSize="1.3em"
      />
    </NavBar>
  );
};
