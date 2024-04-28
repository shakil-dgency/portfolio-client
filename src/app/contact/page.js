import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function page() {
	return (
		<div>
			<NavBar />
			<ContactHero />
			<ContactForm />
			<Footer />
		</div>
	);
}

export default page;
