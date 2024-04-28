import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import google from "../../../public/profile/google-ads.svg";
import design from "../../../public/profile/microsoft-clarity.svg";
import GlobalSectionStarter from "./GlobalSectionStarter";

function Expertise() {
	return (
		<div className="">
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Expertise"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-1 gap-[40px]">
					<ExpertiseCard image={google} title="Google Ads" />
					<ExpertiseCard image={design} title="Microsoft Clarity" />
				</div>
			</div>
		</div>
	);
}

export default Expertise;
