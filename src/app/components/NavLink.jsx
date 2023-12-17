import Link from "next/link";

const NavLink = ({ href, title, setNavbarOpen }) => {
	return (
		<Link
			href={href}
			onClick={() => setNavbarOpen(false)}
			className="block py-2 pl-3 pr-4 text-[#c3e2f3] sm:text-xl rounded md:p-0 hover:text-white">
			{title}
		</Link>
	);
};
export default NavLink;
