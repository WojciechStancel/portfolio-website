"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import BURGER_ICON from "../../../public/images/burger.svg";
import X_ICON from "../../../public/images/x.svg";
import LOGO from "../../../public/images/Logo.png";
import MobileMenu from "./MobileMenu";

export const navigationLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	function handleNavbar() {
		setNavbarOpen(!navbarOpen);
	}

	return (
		<nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212]">
			<div className="flex flex-wrap items-center justify-between mx-auto p-3 md:p-4">
				<Link
					href={"/"}
					className="flex items-center text-2xl md:text-4xl text-white font-semibold">
					<Image
						src={LOGO}
						width={40}
						height={30}
						alt="logo image"
						className="md:w-12 mr-2 px-0.5 py-0.5 border border-[#33353F] rounded-full"
					/>
					MyPortfolio
				</Link>
				<div className="mobile-menu block md:hidden">
					{navbarOpen ? (
						<button onClick={handleNavbar} className="p-4">
							<Image src={X_ICON} alt="close navigation" className="h-7 w-7" />
						</button>
					) : (
						<button onClick={handleNavbar} className="p-4">
							<Image
								src={BURGER_ICON}
								alt="open navigation"
								className="h-7 w-7"
							/>
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto md:mr-3" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-5">
						{navigationLinks.map((link) => {
							return (
								<li key={link.path}>
									<NavLink href={link.path} title={link.title} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{navbarOpen && <MobileMenu handleNavbar={handleNavbar} />}
		</nav>
	);
};
export default Navbar;
