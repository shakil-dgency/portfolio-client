import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/Profile/AboutMe";
import Expertise from "@/components/Profile/Expertise";
import React from "react";

function page() {
	return (
		<div className="">
			<NavBar />
			<Hero />
			<Expertise />
			<AboutMe />
		</div>
	);
}

export default page;
