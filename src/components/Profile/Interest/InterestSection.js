import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import InterestArea from "./InterestArea";

async function getInterestData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=interest.section_head&populate[1]=interest.interest_list`, {
		next: { revalidate: 10 },
	});

	const interestData = await res.json();
	return interestData;
}

async function InterestSection() {
	const interestData = await getInterestData();
	return (
		<div>
			<div id="interest" className="g__body-container ">
				<GlobalSectionStarter data={interestData?.data.attributes.interest.section_head} />
				<InterestArea data={interestData?.data.attributes.interest.interest_list} />
			</div>
		</div>
	);
}

export default InterestSection;
