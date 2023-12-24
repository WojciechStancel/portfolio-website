import { navigationLinks } from "./Navbar";
import NavLink from "./NavLink";

const MobileMenu = ({ handleNavbar }) => {
	return (
		<ul className="flex flex-col py-5 items-center">
			{navigationLinks.map((link) => {
				return (
					<li key={link.path}>
						<NavLink
							href={link.path}
							title={link.title}
							handleNavbar={handleNavbar}
						/>
					</li>
				);
			})}
		</ul>
	);
};
export default MobileMenu;
