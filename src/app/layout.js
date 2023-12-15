import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio",
	description: "Portfolio website generated with Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ scrollBehavior: "smooth" }}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
