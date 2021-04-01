type use = { isFetching: boolean; data: string[]; error: number };

export const useLaunchesFetch = (): use => {
  return { isFetching: true, data: ['something', 'something'], error: 300 };
};
