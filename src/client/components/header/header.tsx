import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const Header = () => (
	<header className="header">
		<nav className="flex flex-row justify-between items-center">
			<h2 className="text-sm text-gray-600">Cryptocurrency Market Data</h2>
			<button aria-label="Open Search" className="search-icon text-gray-700 ">
				<span className="sr-only">Search</span>
				<SearchIcon />
			</button>
		</nav>
	</header>
);

export default Header;
