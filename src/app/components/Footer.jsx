const Footer = () => {
	const currentYear = new Date().getFullYear()


	return (
		<footer className="text-white border border-top-[#33353F] border-l-transparent border-r-transparent">
			<div className="container mx-auto p-12 flex justify-around ">
				<span>LOGO </span>
				<span>{currentYear} </span>All rights reserved &#174;
			</div>
		</footer>
	);
};
export default Footer;
