import { useEffect } from 'react';
import { Moon, Sun } from 'react-feather';

function toggleTheme(el: HTMLInputElement) {
	const themesList = el.getAttribute('data-toggle-theme');
	if (themesList) {
		const themesArray = themesList.split(',');
		if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
			if (themesArray.length == 1) {
				document.documentElement.removeAttribute('data-theme');
				localStorage.removeItem('theme');
			} else {
				document.documentElement.setAttribute('data-theme', themesArray[1]);
				localStorage.setItem('theme', themesArray[1]);
			}
		} else {
			document.documentElement.setAttribute('data-theme', themesArray[0]);
			localStorage.setItem('theme', themesArray[0]);
		}
	}
}
export default function SwitchTheme() {
	useEffect(() => {
		[
			...document.querySelectorAll<HTMLInputElement>('[data-toggle-theme]'),
		].forEach((el) => {
			el.addEventListener('click', (event) => {
				toggleTheme(event.currentTarget as HTMLInputElement);
			});
		});

		return () =>
			[...document.querySelectorAll('[data-toggle-theme]')].forEach((el) =>
				el.removeEventListener('click', () => {}, false)
			);
	}, []);

	return (
		<div className="flex gap-2">
			<Sun />
			<input
				type="checkbox"
				className="toggle"
				data-toggle-theme="light,dracula"
			/>
			<Moon />
		</div>
	);
}
