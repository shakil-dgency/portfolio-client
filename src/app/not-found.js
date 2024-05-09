import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function NotFound() {
	return (
		<div>
			<NavBar />
			<div className="h-[50vh] g__body-container">
				<h1 className="text-center">404 Not Found</h1>
			</div>
			<Footer />
		</div>
	);
}

export default NotFound;
