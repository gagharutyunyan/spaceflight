interface IFlightLinks {
  patch: {
    small: string;
    large: string;
  };
  wikipedia: string;
}

export interface IFlight {
  name: string;
  id: string;
  flight_number: number;
  date: string;
  details: string;
  links: IFlightLinks;
  isDragDisabled?: boolean;
}

export type Launches = {
  results: IFlight[];
};

export type LaunchesState = {
  fetchedData: Launches;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

export type ErrorHttpAction = string;

export type FetchDataType<T> = (requestUrl: string) => Promise<T>;

export type APIFetchDataType = {
  launches: {
    fetch: FetchDataType<Launches>;
  };
};

export type BookingColumnDataType = {
  name: string;
  results: IFlight[];
  isDragDisabled: boolean;
};

export type BookingColumnsDataType = {
  [key: string]: {
    name: string;
    results: IFlight[];
    isDragDisabled: boolean;
  };
};
