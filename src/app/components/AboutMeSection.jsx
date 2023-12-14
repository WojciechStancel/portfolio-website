"use client";

import Image from "next/image";
import ABOUT_ME_IMG from "../../../public/images/aboutme.jpg";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import aboutMeData from "../constants/aboutmeData";
const AboutMeSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={ABOUT_ME_IMG}
					priority
					alt="computer monitors with programming tools"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<p className="text-base md:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
						corporis sapiente deleniti illum consequatur, nam sunt non omnis
						similique quod?
					</p>
					<div className="flex flex-row mt-7">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("experience")}
							active={tab === "experience"}>
							Experience
						</TabButton>
					</div>
					<div className="mt-7">
						{aboutMeData.find((about) => about.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutMeSection;
