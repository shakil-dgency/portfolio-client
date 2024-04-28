import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import InterestArea from "./InterestArea";

function InterestSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Interest"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<InterestArea />
			</div>
		</div>
	);
}

export default InterestSection;
