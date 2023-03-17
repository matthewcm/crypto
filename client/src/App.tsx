import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import Layout from './components/Layout/Layout';
import './app.css';

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<Layout>
			<div className="App container min-h-screen" role="main">
				Hello
			</div>
		</Layout>
	);
}

export default App;
