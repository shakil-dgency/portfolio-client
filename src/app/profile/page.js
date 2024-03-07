import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

function page() {
	return (
		<div className="h-[100vh]">
			<NavBar />
			<Hero />
		</div>
	);
}

export default page;
