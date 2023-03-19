import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Layout from './components/Layout/Layout';
import AuthProvider from './components/Auth/AuthProvider';
import './App.css';
import MarketSummary from './components/MarketSummary/MarketSummary';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <div className="App container min-h-screen" role="main">
          <MarketSummary/>
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
