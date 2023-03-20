import { useState } from 'react';
import { type SingleValue } from 'react-select';
import { SelectOption } from '../../types/SelectOption';
import { useMarketSummaryForCurrency } from '../../hooks/useMarketSummaryForCurrency';

export const useSearchMarketLogic = () => {

  const [currency, setCurrency] = useState<string>('');
  const market = useMarketSummaryForCurrency(currency);

  const handleChange = (option: SingleValue<SelectOption>) => {
    if (!option) return;
    setCurrency(option.value);
  };

  return {
    market,
    handleChange,
  };
};
