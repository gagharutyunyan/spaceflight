import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BookingColumnDataType } from '../../types';
import { Drag } from '../Drag';

import './Droppable.css';

type PropTypes = {
  columnId: string;
  column: BookingColumnDataType;
};

export const Drop: FC<PropTypes> = ({ columnId, column }: PropTypes) => {
  return (
    <Droppable
      droppableId={columnId}
      isDropDisabled={column.isDragDisabled}
      key={columnId}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
            }}
          >
            {column.results.map((item, index) => {
              return <Drag item={item} key={item.id} index={index} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
