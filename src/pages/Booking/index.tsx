import React, { FC, useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';
import { Drop } from '../../components/Drop';
import { useDragEnd } from '../../hooks/useDragEnd';
import { BookingColumnsDataType, ErrorHttpAction } from '../../types';

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

  return (
    <StyledBooking>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && (
        <DragDropContext
          onDragEnd={(result) => useDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return <Drop key={columnId} columnId={columnId} column={column} />;
          })}
        </DragDropContext>
      )}
    </StyledBooking>
  );
};
