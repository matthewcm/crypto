import React, { PropsWithChildren } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { type PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../app/store';
// As a basic setup, import your same slice reducers
import marketSlice from '../features/market/marketSlice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export  const WithProviders = (
  { 
    children,
    preloadedState = {},
    store = configureStore({
      reducer: {
        marketSummaryList:  marketSlice,
      }, 
      preloadedState,
    }),
  }:PropsWithChildren<ExtendedRenderOptions>,
) => {
  return <Provider store={store}>{children}</Provider>;
};

