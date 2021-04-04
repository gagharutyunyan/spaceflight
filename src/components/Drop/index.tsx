import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BookingColumnDataType } from '../../types';
import { Drag } from '../Drag';
import styled from 'styled-components';

const StyledBookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 350px;
`;

const StyledDroppable = styled.div`
  background-color: white;
  margin: 13px;
  border: 2px solid black;
  border-radius: 5px;
`;

const Item = styled.div`
  background-color: white;
  padding: 13px;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
`;

type PropTypes = {
  columnId: string;
  column: BookingColumnDataType;
};

export const Drop: FC<PropTypes> = ({ columnId, column }: PropTypes) => {
  return (
    <StyledBookingContainer>
      <Title>{column.name}</Title>
      <StyledDroppable>
        <Droppable
          droppableId={columnId}
          isDropDisabled={column.isDragDisabled}
          key={columnId}
        >
          {(provided) => {
            return (
              <Item {...provided.droppableProps} ref={provided.innerRef}>
                {column.results.map((item, index) => {
                  return <Drag item={item} key={item.id} index={index} />;
                })}
                {provided.placeholder}
              </Item>
            );
          }}
        </Droppable>
      </StyledDroppable>
    </StyledBookingContainer>
  );
};
