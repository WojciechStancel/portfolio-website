import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Portfolio Website - Wojciech Stancel ",
	description: "Portfolio website generated with Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ scrollBehavior: "smooth" }}>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
