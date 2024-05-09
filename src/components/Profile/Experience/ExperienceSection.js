import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import ExperienceItems from "./ExperienceItems";

async function getExperienceData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=experience&populate[1]=experience.section_head&populate[2]=experience.experience_list.logo`,
		{
			next: { revalidate: 10 },
		}
	);

	const experienceData = await res.json();
	return experienceData;
}

async function ExperienceSection() {
	const experienceData = await getExperienceData();
	return (
		<div>
			<div id="experience" className="g__body-container ">
				<GlobalSectionStarter data={experienceData?.data?.attributes.experience.section_head} />
				<div className="grid grid-cols-1 gap-[40px]">
					{experienceData?.data?.attributes.experience.experience_list?.map((item) => {
						return <ExperienceItems data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ExperienceSection;
