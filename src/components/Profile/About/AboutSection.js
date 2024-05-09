import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import AboutContent from "./AboutContent";

async function getAboutData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=about.image`, {
		next: { revalidate: 10 },
	});

	const aboutData = await res.json();
	return aboutData;
}

async function AboutSection() {
	const aboutData = await getAboutData();
	return (
		<div>
			<div id="about" className="g__body-container ">
				<GlobalSectionStarter data={aboutData?.data.attributes.about} />
				<AboutContent data={aboutData?.data.attributes.about} />
			</div>
		</div>
	);
}

export default AboutSection;
