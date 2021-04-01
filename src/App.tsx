import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '../init/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <h1>hi</h1>
    </Provider>
  );
};
