import {navigationLinks} from "./Navbar";
import NavLink from "./NavLink";

const MobileMenu = () => {
	return (
		<ul className="flex flex-col py-5 items-center">
			{navigationLinks.map((link) => {
				return (
					<li key={link.path}>
						<NavLink href={link.path} title={link.title} />
					</li>
				);
			})}
		</ul>
	);
};
export default MobileMenu;
