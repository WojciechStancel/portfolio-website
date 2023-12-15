"use client";

import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import ABOUT_ME_IMG from "../../../public/images/AboutMe.jpg";
import aboutMeData from "../constants/aboutmeData";
import Image from "next/image";
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
			<div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={ABOUT_ME_IMG}
					priority
					alt="laptop with programming tools"
					width={600}
					height={400}
					className="rounded-lg border border-[#33353F]"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<p className="text-base md:text-lg">
						Hi, I am Wojtek - frontend developer with aspiration to fullstack
						programmer from Poland. I am currently in the process of learning
						the React framework. <br />
						<br />
						In addition to the frontend, I am also familiar with the workings of
						the backend. I have spent a lot of time to expand my knowledge of
						backend technologies such as Django, Databases and Django Rest
						Framework.
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
					<div className="mt-6">
						{aboutMeData.find((about) => about.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutMeSection;
