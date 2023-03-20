import { useAuth0 } from '@auth0/auth0-react';
import SearchMarketSummary from './SearchMarketSummary';

const SearchMarket = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className='modal'>
        <label htmlFor="" className="modal-box relative lg:p-20 lg:max-w-screen-lg">
          <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-4 top-2">✕</label>

          { !isAuthenticated 
            ? (
              <div className="modal-content">
              Please log in to use search
              </div>
            )
            : (
              <SearchMarketSummary/>
            )
          }
        </label>
      </div>
    </>
  );
};
export default SearchMarket;
