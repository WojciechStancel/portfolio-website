import AboutMeSection from "./components/AboutMeSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mx-auto mt-24 px-12 py-4">
				<HeroSection />
				<AchievementsSection />
				<AboutMeSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
