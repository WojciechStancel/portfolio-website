"use client";

import Link from "next/link";
import GITHUB_ICON from "../../../public/images/github.svg";
import INSTAGRAM_ICON from "../../../public/images/instagram.svg";
import LINKEDIN_ICON from "../../../public/images/linkedin.svg";
import Image from "next/image";
import { useState } from "react";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};

	return (
		<section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
			<div>
				<h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
					voluptatibus, nam commodi asperiores voluptas sapiente, vero veniam
					cum delectus dolorem, tenetur quidem. Odio, recusandae pariatur.
				</p>

				<div className="socials flex flex-row gap-2">
					<Link href={"/"}>
						<Image src={GITHUB_ICON} alt="Github icon" />
					</Link>
					<Link href={"/"}>
						<Image src={LINKEDIN_ICON} alt="Linkedin icon" />
					</Link>
					<Link href={"/"}>
						<Image src={INSTAGRAM_ICON} alt="Instagram icon" />
					</Link>
				</div>
			</div>
			<div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-6">
					<label htmlFor="email" className="text-white block mb-1 font-medium">
						Your email:
					</label>
					<input
						name="email"
						type="email"
						id="email"
						required
						placeholder="example@example.com"
						className="bg-[#ADB7BE] border border-blue-400 placeholder-[#0d0d0dc5] text-[#0b0b0b] text-sm rounded-lg block w-full p-2.5"
					/>
					<label
						htmlFor="subject"
						className="text-white block mb-1 font-medium">
						Subject:
					</label>
					<input
						name="subject"
						type="text"
						id="subject"
						required
						placeholder="Write a subject"
						className="bg-[#ADB7BE] border border-blue-400 placeholder-[#0d0d0dc5] text-[#0b0b0b] text-sm rounded-lg block w-full p-2.5"
					/>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block mb-2 font-medium">
							Your Message:
						</label>
						<textarea
							name="message"
							id="message"
							placeholder="Write a message"
							className="bg-[#ADB7BE] border border-blue-400 placeholder-[#0d0d0dc5] text-[#0b0b0b] text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<button
						type="submit"
						className="px-5 py-2.5 w-full rounded-md bg-gradient-to-br from-blue-300 via-blue-500 to-red-400 hover:bg-red-900 text-white font-medium">
						Send Message
					</button>
					{emailSubmitted && (
						<p className="text-green-400 text-sm mt-2">
							Successfully sent your email!
						</p>
					)}
				</form>
			</div>
		</section>
	);
};
export default EmailSection;
