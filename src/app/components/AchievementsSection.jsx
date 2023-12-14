"use client";

const achievementsList = [
	{
		name: "Projects",
		count: "10+",
	},
	{
		name: "Hours",
		count: "2800+",
	},
	{
		name: "Contributions",
		count: "430+",
	},
];

const AchievementsSection = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((a, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4">
							<h2 className="text-white text-4xl font-bold">{a.count}</h2>
							<p className="text-[#ADB7BE] text-base">{a.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default AchievementsSection;
