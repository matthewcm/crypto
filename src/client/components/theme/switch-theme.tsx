const SwitchTheme = () => (
	<select data-choose-theme className="select max-w-xs">
		<option value=""> ⚙ OS</option>
		<option value="cupcake">
			<span> 🌞 Light</span>
		</option>
		<option value="dracula">
			<span> 🌚 Dark </span>
		</option>
	</select>
);

export default SwitchTheme;
