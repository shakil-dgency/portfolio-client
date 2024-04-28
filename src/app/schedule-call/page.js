import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScheduleCallBody from "@/components/ScheduleCall/ScheduleCallBody";
import React from "react";

function page() {
	return (
		<div>
			<NavBar />
			<ContactHero />
			<ScheduleCallBody />
			<Footer />
		</div>
	);
}

export default page;
