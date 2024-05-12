// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

import Image from "next/image";
import RocketTop from "@/components/RocketTop";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "900"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "H M Hamiduzjaman",
	description: "Hamid's Portfolio application",
	openGraph: {
		images: [
			"https://hamiduzjaman.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdti6i2zwt%2Fimage%2Fupload%2Fv1715414826%2Fhamid1_46c1602017.jpg&w=2048&q=100",
		],
	},
};
export const viewport = {
	width: "device-width",
	minimumScale: 1,

	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className} suppressHydrationWarning={true}>
				{/* {<NavBar />} */}
				{children}
				{/* <Footer /> */}
				<RocketTop />
			</body>
		</html>
	);
}
