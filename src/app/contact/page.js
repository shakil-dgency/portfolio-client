import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import StructureData from "@/components/StructureData";
import React from "react";

export async function generateMetadata() {
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact?populate[0]=seo.metaImage`).then((res) => res.json());
	// console.log(product);
	const data = product?.data?.attributes.seo;
	return {
		title: data?.metaTitle,
		description: data?.metaDescription,
		canonical: data?.canonicalURL ? data.canonicalURL : "https://hamiduzjaman.com/",
		openGraph: {
			images: data?.metaImage?.data?.attributes.url,
		},
	};
}

async function getContactData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact?populate[0]=contact_hero&populate[1]=lists`, {
		next: { revalidate: 10 },
	});

	const contactData = await res.json();
	return contactData;
}

async function page() {
	const contactData = await getContactData();

	//to set meta structure Data
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact?populate[0]=seo.metaImage`).then((res) => res.json());
	const jsonLd = product?.data?.attributes.seo;

	return (
		<div>
			{/* Add JSON-LD to your page */}
			{jsonLd &&
				jsonLd.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			{/* ... */}

			<NavBar />
			<ContactHero data={contactData?.data?.attributes.contact_hero} />
			<ContactForm data={contactData?.data?.attributes} />
			<div className="pt-[80px] md:pt-[150px]">
				<Footer />
			</div>
		</div>
	);
}

export default page;
