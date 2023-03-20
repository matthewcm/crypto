import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MarketSummary } from '../../types/MarketSummary';

const initialState: MarketSummary[] = [];

const marketSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setMarketSummaryList: (_state, action: PayloadAction<MarketSummary[]>)=> (
      action.payload
    ),
  },
});

export const { setMarketSummaryList } = marketSlice.actions;
export default marketSlice.reducer;
