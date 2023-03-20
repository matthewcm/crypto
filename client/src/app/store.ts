import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import marketReducer from '../features/market/marketSlice';

const rootReducer = combineReducers({
  marketSummaryList: marketReducer,
});


export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
