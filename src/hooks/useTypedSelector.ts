import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppState } from './../store/init/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
