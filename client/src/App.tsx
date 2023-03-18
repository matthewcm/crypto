import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Layout from './components/Layout/Layout';
import AuthProvider from './components/Auth/AuthProvider';
import './App.css';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <div className="App container min-h-screen" role="main">
					Hello
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
