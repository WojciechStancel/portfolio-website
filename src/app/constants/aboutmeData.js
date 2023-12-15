import Link from "next/link";

const aboutMeData = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-dist pl-2">
				<li>React</li>
				<li>JavaScript</li>
				<li>PostgreSQL</li>
				<li>Python</li>
				<li>Node.js</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-dist pl-2">
				<li>Orange Foundation Python Course</li>
				<li>Zrozumieć React</li>
				<li>Frontend Courses</li>
				<Link href={"https://github.com/WojciechStancel/Certificates"} target="_blank">Link to Certificates</Link>
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
