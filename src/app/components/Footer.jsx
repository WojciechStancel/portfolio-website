"use client";
import Image from "next/image";
import LOGO from "../../../public/images/Logo.png";
import { useState } from "react";

function getYear() {
	let currentYear = new Date().getFullYear();
	return currentYear
}

const Footer = () => {
	const [actualYear,] = useState(getYear())

	return (
		<footer className="text-white border border-top-[#33353F] border-l-transparent border-r-transparent">
			<div className="container mx-auto p-12 flex flex-col gap-2 md:flex-row justify-around items-center">
				<span className="flex items-center">
					<Image
						src={LOGO}
						width={40}
						height={30}
						alt="logo image"
						className="md:w-12 mr-2 px-0.5 py-0.5 border border-[#33353F] rounded-full"
					/>
					MyPortfolio{" "}
				</span>
				<span>&copy; {actualYear} </span>All rights reserved.
			</div>
		</footer>
	);
};
export default Footer;
