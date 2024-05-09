import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CaruselStructure from "../CaruselStructure";

async function getMentorsData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=mentors&populate[1]=mentors.section_head&populate[2]=mentors.mentors_card.image`,
		{
			next: { revalidate: 10 },
		}
	);

	const mentorsData = await res.json();
	return mentorsData;
}

async function MentorsSection() {
	const mentorsData = await getMentorsData();
	return (
		<div>
			<div id="mentors" className="g__body-container ">
				<GlobalSectionStarter data={mentorsData?.data?.attributes.mentors.section_head} />
				<CaruselStructure mentor={true} data={mentorsData?.data?.attributes.mentors.mentors_card} />
			</div>
		</div>
	);
}

export default MentorsSection;
