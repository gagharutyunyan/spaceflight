import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  background-color: white;
  color: palevioletred;
  font-size: 1.6em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;

  &.active,
  &:active {
    background-color: palevioletred;
    color: white;
  }
`;

type PropsType = {
  linkTo: string;
  linkName: string;
};

export const NavigationLink: FC<PropsType> = ({
  linkTo,
  linkName,
}: PropsType) => {
  return (
    <StyledLink to={linkTo} activeClassName="active">
      {linkName}
    </StyledLink>
  );
};
