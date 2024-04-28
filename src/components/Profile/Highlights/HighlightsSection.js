import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import HighlightsCard from "./HighlightsCard";
import img1 from "../../../../public/profile/services/digital-marketing.svg";

function HighlightsSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Highlights"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone."
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[80px] sm:gap-y-[100px] gap-x-[20px] pt-[50px] ">
					<HighlightsCard img={img1} description="In Business Since " statistic="2016" />
					<HighlightsCard img={img1} description="In Business Since " statistic="12" />
					<HighlightsCard img={img1} description="In Business Since " statistic="150+" />
					<HighlightsCard img={img1} description="In Business Since " statistic="10M" />
				</div>
			</div>
		</div>
	);
}

export default HighlightsSection;
