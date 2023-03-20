import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { themeChange } from 'theme-change';
import Layout from './components/Layout/Layout';
import AuthProvider from './components/Auth/AuthProvider';
import MarketSummary from './components/MarketSummary/MarketSummary';
import SearchMarketModal from './components/SearchMarket/SearchMarketModal';

import { setupStore } from './app/store';
import './App.css';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Provider store={setupStore()}>
      <AuthProvider>
        <Layout>
          <div className="App container min-h-screen" role="main">
            <SearchMarketModal/>
            <MarketSummary/>
          </div>
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default App;
