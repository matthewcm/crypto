import { useEffect } from 'react';
import Layout from './components/layout/layout';
import { themeChange } from 'theme-change';

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<Layout>
			<div className="App container min-h-screen">Hello</div>
		</Layout>
	);
}

export default App;
