"use client";

import Image from "next/image";
import MY_IMAGE from "../../../public/images/avatar1.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	const handleDownload = () => {
		const pdfPath = `/assets/CV_Wojciech_Stancel_eng.pdf`;
		const pdfUrl = new URL(pdfPath, window.location.origin);
		const link = document.createElement("a");
		link.href = pdfUrl.href;
		link.download = `CV_Wojciech_Stancel_eng.pdf`;
		link.click();
	};

	return (
		<section className="lg:py-16 relative">
			<div className="grid grid-cols-1 lg:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-800">
							Hello, I'm{" "}
						</span>
						<br />

						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Wojtek",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"Web Developer",
								1000,
								"Python Developer",
								1000,
								"Future Fullstack",
								1000,
							]}
							wrapper="span"
							speed={50}
							style={{ fontSize: "1em", display: "inline-block" }}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl px-2">
						Coding is not just about commands and algorithms - it's about
						expressing yourself in the language of machines to create something
						meaningful and impactful.
					</p>
					<div className="mt-5">
						<a href="#contact">
							<button className="px-6 py-3 mb-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-300 via-primary-500 to-secondary-400 hover:from-primary-400 hover:to-secondary-500 text-white">
								Hire Me
							</button>
						</a>
						<button
							onClick={handleDownload}
							className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-300 to-secondary-400 hover:bg-slate-800 text-white transition-colors duration-300 ">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors duration-300">
								Download CV
							</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center mt-5 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative shadow-md shadow-slate-500">
						<Image
							src={MY_IMAGE}
							alt="hero image"
							width={400}
							height={400}
							priority
							className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
export default HeroSection;
