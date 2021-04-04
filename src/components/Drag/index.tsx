import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import { IFlight } from '../../types';
import styled from 'styled-components';

const StyledDraggableContainer = styled.div`
  height: 80px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: #ccc !important;
  }
`;
const StyledDraggableInfo = styled.div`
  padding: 5px;
`;
const StyledDraggableName = styled.h4`
  margin: 0;
  padding: 0;
`;
const StyledDraggableDetails = styled.div`
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 3;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  box-orient: vertical;
`;

const StyledDraggablePhoto = styled.img``;
const StyledDraggableLink = styled(Link)`
  display: flex;
  height: 80px;
  text-decoration: none;
  color: #000;
  cursor: grab;
`;
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
        return (
          <StyledDraggableContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: 'none',
              backgroundColor: snapshot.isDragging ? '#589ad4' : 'white',
              ...provided.draggableProps.style,
            }}
          >
            <StyledDraggableLink to={`/flight/${item.id}`}>
              <StyledDraggableInfo>
                <StyledDraggableName>{item.name}</StyledDraggableName>
                <StyledDraggableDetails>
                  {item.details
                    ? item.details
                    : 'Details about launch is absent...'}
                </StyledDraggableDetails>
              </StyledDraggableInfo>
              <StyledDraggablePhoto src={item.links.patch.large} />
            </StyledDraggableLink>
          </StyledDraggableContainer>
        );
      }}
    </Draggable>
  );
};
