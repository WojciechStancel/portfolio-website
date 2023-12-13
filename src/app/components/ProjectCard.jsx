import Link from "next/link";
import CODE_ICON from "../../../public/images/code.svg";
import EYE_ICON from "../../../public/images/eye.svg";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-opacity duration-500">
					<Link href={githubUrl}>
						<Image
							src={CODE_ICON}
							alt="icon to github"
							className="h-10 w-10 m-2 hover:scale-150 transition-transform duration-500"
						/>
					</Link>
					<Link href={previewUrl}>
						<Image
						alt="icon to preview website"
							src={EYE_ICON}
							className="h-10 w-10 m-2 hover:scale-150 transition-transform duration-500"
						/>
					</Link>
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
				<h5 className="font-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#c3e2f3]">{description}</p>
			</div>
		</div>
	);
};
export default ProjectCard;
