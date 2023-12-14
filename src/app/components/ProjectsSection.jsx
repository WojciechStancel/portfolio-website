"use client";

import { useState } from "react";
import projectsData from "../constants/projectsData";
import ProjectCard from "./ProjectCard";
import CategoryButton from "./CategoryButton";
import projectsCategories from "../constants/projectsCategories";

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");

	const handleChangeTag = (newTag) => {
		setTag(newTag);
	};

	const filteredProject = projectsData.filter((project) => {
		return project.tag.includes(tag);
	});

	return (
		<section className="text-white text-center" id="projects">
			<h2 className="text-4xl font-bold mb-4">My Projects</h2>
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
				<p className="mt-4">There are no projects yet...</p>
			) : (
				<div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-2">
					{filteredProject.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								imgUrl={project.image}
								githubUrl={project.githubUrl}
								previewUrl={project.previewUrl}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
};
export default ProjectsSection;
