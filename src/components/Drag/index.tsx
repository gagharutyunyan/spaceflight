import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import { IFlight } from '../../types';
import styled from 'styled-components';

const StyledDraggableContainer = styled.div<ContainerTypes>`
  height: 80px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  user-select: none;
  background-color: ${(props) => (props.isDragging ? '#589ad4' : 'white')};
  &:hover {
    background-color: #ccc !important;
  }
`;

const Info = styled.div`
  padding: 10px;
`;

const Name = styled.h4`
  margin: 0;
  padding: 0;
`;

const Details = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Photo = styled.img`
  width: 80px;
`;

const StyledLink = styled(Link)`
  display: flex;
  height: 80px;
  text-decoration: none;
  color: #000;
  cursor: grab;
`;

type ContainerTypes = {
  isDragging: boolean;
};

type PropTypes = {
  item: IFlight;
  index: number;
};

export const Drag: FC<PropTypes> = ({ item, index }: PropTypes) => {
  const { id } = item;
  return (
    <Draggable
      key={id}
      draggableId={id}
      isDragDisabled={item.isDragDisabled}
      index={index}
    >
      {(provided, snapshot) => {
        console.log(provided.draggableProps.style);
        return (
          <StyledDraggableContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <StyledLink to={`/flight/${item.id}`}>
              <Info>
                <Name>{item.name}</Name>
                <Details>
                  {item.details
                    ? item.details
                    : 'Details about launch is absent...'}
                </Details>
              </Info>
              <Photo src={item.links.patch.large} />
            </StyledLink>
          </StyledDraggableContainer>
        );
      }}
    </Draggable>
  );
};
