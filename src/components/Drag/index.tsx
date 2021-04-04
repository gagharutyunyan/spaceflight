import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IFlight } from '../../types';

import './Draggable.css';

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
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="o-calendar__box__item"
            style={{
              userSelect: 'none',
              backgroundColor: snapshot.isDragging ? '#589ad4' : '#e8eff5',
              ...provided.draggableProps.style,
            }}
          >
            {item.name}
          </div>
        );
      }}
    </Draggable>
  );
};
