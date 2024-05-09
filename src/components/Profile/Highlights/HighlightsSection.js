import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import HighlightsCard from "./HighlightsCard";
import img1 from "../../../../public/profile/services/digital-marketing.svg";

async function getHighlightsData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=highlights&populate[1]=highlights.section_head&populate[2]=highlights.highlights_card.icon`,
		{
			next: { revalidate: 10 },
		}
	);

	const highlightsData = await res.json();
	return highlightsData;
}

async function HighlightsSection() {
	const highlightsData = await getHighlightsData();
	return (
		<div>
			<div id="highlights" className="g__body-container ">
				<GlobalSectionStarter data={highlightsData?.data.attributes.highlights.section_head} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[80px] sm:gap-y-[100px] gap-x-[20px] pt-[50px] ">
					{highlightsData?.data.attributes.highlights.highlights_card?.map((item) => {
						return <HighlightsCard data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default HighlightsSection;
