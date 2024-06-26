import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Body from "@/components/notFound/Body";
import React from "react";

function NotFound() {
	return (
		<div>
			<NavBar />
			<div className="pb-[80px]">
				<Body />
			</div>
			<Footer />
		</div>
	);
}

export default NotFound;
