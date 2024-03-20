// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "900"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "H M Hamiduzjaman",
	description: "Portfolio application",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className} suppressHydrationWarning={true}>
				{/* <NavBar /> */}
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
