import Image from "next/image";
import X_ICON from "../../../public/images/x.svg";
import { useState } from "react";

const SelectPopupModal = ({ setPopupOpen }) => {
	const [selectedLanguage, setSelectedLanguage] = useState("");

	const handleDownloadClick = () => {
		if (selectedLanguage) {
			const pdfPath = `/assets/CV_Wojciech_Stancel_${selectedLanguage}.pdf`;
			const pdfUrl = new URL(pdfPath, window.location.origin);
			const link = document.createElement("a");
			link.href = pdfUrl.href;
			link.download = `CV_Wojciech_Stancel_${selectedLanguage}.pdf`;
			link.click();
			setTimeout(() => {
				setPopupOpen(false)
			}, 2000)
		} else {
			alert("You have to choose language version!");
		}
	};

	return (
		<div className="text-white text-xl fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10 flex justify-center items-center">
			<div className="text-white bg-gradient-to-br from-primary-400 to-secondary-400 text-xl h-2/5 w-3/4 lg:w-1/3 flex flex-col items-center justify-center rounded-xl opacity-90 relative overflow-hidden">
				<select
					onChange={(e) => {
						setSelectedLanguage(e.target.value);
					}}
					name="language"
					className="mx-4 max-[350px]:px-1 px-5 py-2 text-base md:text-lg rounded-md bg-primary-400 border border-primary-400 cursor-pointer hover:bg-primary-500 transition-colors duration-300">
					<option value="">Select CV language</option>
					<option value="en">ENG</option>
					<option value="pl">PL</option>
				</select>
				<button
					onClick={() => {
						setPopupOpen(false);
					}}
					className="top-0 right-0 m-4 absolute rounded-full p-1 border border-white hover:scale-110 transition-transform duration-300">
					<Image
						src={X_ICON}
						alt="icon to close popup"
						className="hover:scale-110 transition-transform duration-300"
					/>
				</button>
				<button
					onClick={handleDownloadClick}
					className="px-5 py-2 mt-4 text-base rounded-md bg-primary-400 border border-primary-400 cursor-pointer hover:bg-primary-500 transition-colors duration-300">
					Download CV
				</button>
			</div>
		</div>
	);
};
export default SelectPopupModal;
