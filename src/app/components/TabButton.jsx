const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? "text-white border-b border-blue-400"
		: "text-[#c3e2f3]";

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};
export default TabButton;
