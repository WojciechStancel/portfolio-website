"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import navigationLinks from "../constants/navigationLinks"
import BURGER_ICON from "../../../public/images/burger.svg";
import X_ICON from "../../../public/images/x.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212]">
			<div className="flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold">
					LOGO
				</Link>
				<div className="mobile-menu block md:hidden">
					{navbarOpen ? (
						<button onClick={() => setNavbarOpen(false)} className="p-4">
							<Image src={X_ICON} alt="close navigation" className="h-7 w-7" />
						</button>
					) : (
						<button onClick={() => setNavbarOpen(true)} className="p-4">
							<Image src={BURGER_ICON} alt="open navigation" className="h-7 w-7" />
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
            {navbarOpen && <MobileMenu />}
		</nav>
	);
};
export default Navbar;
