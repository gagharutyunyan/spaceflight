import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)<StyledLinkPropsType>`
  display: inline-block;
  background-color: white;
  color: palevioletred;
  font-size: ${(props) => props.fontSize || '1em'};
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

type StyledLinkPropsType = {
  fontSize: string;
};

type PropsType = {
  linkTo: string;
  linkName: string;
  fontSize: string;
};

export const NavigationLink: FC<PropsType> = ({
  linkTo,
  linkName,
  fontSize,
}: PropsType) => {
  return (
    <StyledLink to={linkTo} activeClassName="active" fontSize={fontSize}>
      {linkName}
    </StyledLink>
  );
};
