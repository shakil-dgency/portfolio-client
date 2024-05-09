import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

async function getContactData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact?populate[0]=contact_hero&populate[1]=lists`, {
		next: { revalidate: 10 },
	});

	const contactData = await res.json();
	return contactData;
}

async function page() {
	const contactData = await getContactData();
	return (
		<div>
			<NavBar />
			<ContactHero data={contactData?.data.attributes.contact_hero} />
			<ContactForm data={contactData?.data.attributes} />
			<div className="pt-[80px] md:pt-[150px]">
				<Footer />
			</div>
		</div>
	);
}

export default page;
