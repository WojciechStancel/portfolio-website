"use client";

import { useState, useRef } from "react";
import projectsData from "../constants/projectsData";
import ProjectCard from "./ProjectCard";
import CategoryButton from "./CategoryButton";
import { motion, useInView } from "framer-motion";

const projectsCategories = [
	{
		id: 1,
		name: "All",
	},
	{
		id: 2,
		name: "React",
	},
	{
		id: 3,
		name: "Frontend",
	},
	{
		id: 4,
		name: "Wordpress",
	},
	{
		id: 5,
		name: "Python",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isView = useInView(ref, { once: true });

	const handleChangeTag = (newTag) => {
		setTag(newTag);
	};

	const filteredProject = projectsData.filter((project) => {
		return project.tag.includes(tag);
	});

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section className="text-white text-center" id="projects" ref={ref}>
			<h2 className="text-4xl font-bold mb-4 mt-4">My Projects</h2>
			<div className="text-[#c3e2f3] flex flex-row flex-wrap justify-center items-center gap-2 py-6">
				{projectsCategories.map((category) => {
					return (
						<CategoryButton
							key={category.id}
							onClick={handleChangeTag}
							name={category.name}
							active={tag === category.name}
						/>
					);
				})}
			</div>

			{filteredProject.length === 0 ? (
				<div className="text-xl">
					<p className="mt-4">There are no projects yet.</p>
					<p>But they are in progress...</p>
				</div>
			) : (
				<ul className="grid md:grid-cols-3 gap-8 md:gap-12 mt-2">
					{filteredProject.map((project, index) => {
						return (
							<motion.li
								key={index}
								variants={cardVariants}
								initial="initial"
								animate={isView ? "animate" : "initial"}
								transition={{ duration: 0.3, delay: index * 0.4 }}>
								<ProjectCard
									title={project.title}
									description={project.description}
									imgUrl={project.image}
									githubUrl={project.githubUrl}
									previewUrl={project.previewUrl}
								/>
							</motion.li>
						);
					})}
				</ul>
			)}
		</section>
	);
};
export default ProjectsSection;
