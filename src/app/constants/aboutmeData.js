import Link from "next/link";

const aboutMeData = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-dist pl-2">
				<li className="flex">
					React
					<img src="/images/react.svg" width={20} className="ml-1" />
				</li>
				<li className="flex">
					JavaScript
					<img src="/images/javascript.svg" width={20} className="ml-1" />
				</li>
				<li className="flex">
					PostgreSQL
					<img src="/images/postgresql.svg" width={20} className="ml-1" />
				</li>
				<li className="flex">
					Python
					<img src="/images/python.svg" width={20} className="ml-1" />
				</li>
				<li className="flex">
					Node.js
					<img src="/images/nodejs.svg" width={20} className="ml-1" />
				</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-dist pl-2">
				<li>Orange Foundation Python Course - 12.2022 - 06.2023</li>
				<li>Zrozumieć React - 11.2023</li>
				<li>Frontend Courses - 12.2022 - now</li>
				<Link
					href={"https://github.com/WojciechStancel/Certificates"}
					target="_blank"
					className=" hover:text-blue-500 transition-colors duration-300">
					Link to Certificates
				</Link>
			</ul>
		),
	},
	{
		title: "Experience",
		id: "experience",
		content: (
			<ul className="list-dist pl-2">
				<li>Freelancing 10.2023 - now</li>
				<li>CodeCr8ive - website owner</li>
			</ul>
		),
	},
];

export default aboutMeData;
