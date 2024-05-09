import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import EducationItem from "./EducationItem";

async function getEducationData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=education.section_head&populate[1]=education.education_card.logo`,
		{
			next: { revalidate: 10 },
		}
	);

	const educationData = await res.json();
	return educationData;
}

async function EducationSection() {
	const educationData = await getEducationData();
	return (
		<div>
			<div id="education" className="g__body-container ">
				<GlobalSectionStarter data={educationData?.data.attributes.education.section_head} />
				<div className="flex flex-col gap-6">
					{educationData?.data.attributes.education.education_card?.map((item) => {
						return <EducationItem data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default EducationSection;
