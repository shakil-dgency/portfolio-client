import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScheduleCallBody from "@/components/ScheduleCall/ScheduleCallBody";
import StructureData from "@/components/StructureData";
import React from "react";

export async function generateMetadata() {
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule-call?populate[0]=seo.metaImage`).then((res) => res.json());
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

async function getScheduleData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule-call?populate[0]=schedule_hero&populate[1]=cards.icon`, {
		next: { revalidate: 10 },
	});

	const scheduleData = await res.json();
	return scheduleData;
}

async function page() {
	const scheduleData = await getScheduleData();

	//to set meta structure Data
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule-call?populate[0]=seo.metaImage`).then((res) => res.json());
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
			<ContactHero data={scheduleData?.data?.attributes.schedule_hero} />
			<ScheduleCallBody data={scheduleData?.data?.attributes} />
			<div className="pt-[80px] md:pt-[150px]">
				<Footer />
			</div>
		</div>
	);
}

export default page;
