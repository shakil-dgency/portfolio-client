import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScheduleCallBody from "@/components/ScheduleCall/ScheduleCallBody";
import React from "react";

async function getScheduleData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/schedule-call?populate[0]=schedule_hero&populate[1]=cards.icon`, {
		next: { revalidate: 10 },
	});

	const scheduleData = await res.json();
	return scheduleData;
}

async function page() {
	const scheduleData = await getScheduleData();
	return (
		<div>
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
