"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
	() => {
		return import("react-animated-numbers");
	},
	{ ssr: false }
);

const achievementsList = [
	{
		name: "Projects",
		count: "12",
		postfix: "+",
	},
	{
		name: "Hours",
		count: "3500",
		postfix: "+",
	},
	{
		name: "Contributions",
		count: "600",
		postfix: "+",
	},
];

const AchievementsSection = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 xl:px-0 sm:py-16 ">
			<div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((a, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4 my-1">
							<h2 className="text-white text-4xl font-bold flex ">
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(a.count)}
									locale="en-US"
									transitions={(index) => ({
										type: "spring",
										duration: index + 1,
									})}
								/>
								{a.postfix}
							</h2>
							<p className="text-[#ADB7BE] text-base">{a.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default AchievementsSection;
