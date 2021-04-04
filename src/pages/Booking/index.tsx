import React, { FC, useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';
import { Drop } from '../../components/Drop';
import { BookingColumnsDataType, ErrorHttpAction } from '../../types';
import styled from 'styled-components';

const StyledBooking = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

type PropTypes = {
  bookingData: BookingColumnsDataType;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

export const Booking: FC<PropTypes> = ({
  bookingData,
  isFetching,
  error,
}: PropTypes) => {
  const [columns, setColumns] = useState<BookingColumnsDataType>({});
  useEffect(() => {
    setColumns(bookingData);
  }, [isFetching]);

  const onDragEnd = (
    result: DropResult,
    columns: BookingColumnsDataType,
    setColumns: React.Dispatch<React.SetStateAction<BookingColumnsDataType>>
  ): void => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (destination.droppableId !== 'booked') {
      // eslint-disable-next-line
      let isAgree = confirm('Ты uveren?');
      if (!isAgree) return;
    }
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.results];
      const destItems = [...destColumn.results];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          results: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          results: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.results];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          results: copiedItems,
        },
      });
    }
  };
  return (
    <StyledBooking>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div key={columnId}>
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Drop columnId={columnId} column={column} />
                </div>
              </div>
            );
          })}
        </DragDropContext>
      )}
    </StyledBooking>
  );
};
