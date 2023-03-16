import { useState } from 'react';
import SwitchTheme from '../theme/switch-theme';

const Header = () => {
	const [themeChecked, setThemeChecked] = useState(false);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start"></div>
			<div className="navbar-center">
				<a className="btn btn-ghost normal-case text-xl">Crypto</a>
			</div>
			<div className="navbar-end">
				<div className="form-control">
					<label className="label cursor-pointer">
						<span className="label-text mr-2">Turn on the lights</span>
						<input
							type="checkbox"
							data-toggle-theme="dracula,light"
							data-act-class="ACTIVECLASS"
							className="toggle"
						/>
					</label>
				</div>
				<SwitchTheme />
				<button className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Header;
