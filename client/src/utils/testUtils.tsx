import { PropsWithChildren } from 'react';
import { type PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { AppStore, RootState, setupStore } from '../app/store';

interface ExtendedRenderOptions {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export  const WithProviders = (
  { 
    children,
    preloadedState = {},
    store = setupStore( 
      preloadedState,
    ),
  }:PropsWithChildren<ExtendedRenderOptions>,
) => {
  return <Provider store={store}>{children}</Provider>;
};

