import { DropResult } from 'react-beautiful-dnd';
import { BookingColumnsDataType } from '../types/index';
export const useDragEnd = (
  result: DropResult,
  columns: BookingColumnsDataType,
  setColumns: React.Dispatch<React.SetStateAction<BookingColumnsDataType>>
): void => {
  if (!result.destination) return;
  const { source, destination } = result;
  console.log(source, destination);
  if (destination.droppableId === 'next' && source.droppableId !== 'next') {
    // eslint-disable-next-line
    let isAgree = confirm('Вы уверены то хотите отменить бронирование?');
    if (!isAgree) return;
  }
  if (destination.droppableId === 'booked' && source.droppableId !== 'booked') {
    // eslint-disable-next-line
    alert('Рейс успешно бронирован');
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
