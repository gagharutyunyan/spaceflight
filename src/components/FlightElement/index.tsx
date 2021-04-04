import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const StyledElement = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  margin-top: 50px;
`;
const Photo = styled.img`
  width: 200px;
  height: 200px;
`;
const Info = styled.div`
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;
const Title = styled.h1``;
const Details = styled.p``;

const GoBack = styled.span`
  position: absolute;
  top: -55px;
  right: 0;
  display: inline-block;
  background-color: white;
  color: palevioletred;
  font-size: 1.4em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

type PropTypes = {
  itemId: string;
};

export const FlightElement: FC<PropTypes> = ({ itemId }: PropTypes) => {
  const history = useHistory();
  const element = useTypedSelector((state) =>
    state.launches.fetchedData.results.find((el) => el.id === itemId)
  );

  return (
    <StyledElement>
      <GoBack onClick={() => history.goBack()}>go back</GoBack>
      <Photo src={element?.links.patch.large} />
      <Info>
        <Title>{element?.name}</Title>
        <Details>{element?.details}</Details>
      </Info>
    </StyledElement>
  );
};
