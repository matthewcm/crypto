interface MarketSymbolProps {
  symbol: string;
}

const MarketSymbol = ({ symbol }: MarketSymbolProps) => {
  if (!symbol) {
    return <p>-</p>;
  }
  const [currency, baseCurrency] = symbol.split('-');
  return (<div className='flex gap-2 m-auto text-center items-center justify-center'>
    <span className="font-bold" >{currency}</span>
    <span className="text-gray-500">{baseCurrency}</span>
  </div>);

};

export default MarketSymbol;
