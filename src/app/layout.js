import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "H M Hamiduzjaman",
	description: "Portfolio application",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				{/* <NavBar /> */}
				{children}
				<Footer />
			</body>
		</html>
	);
}
