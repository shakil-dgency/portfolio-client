import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import FollowMeItem from "./FollowMeItem";

function FollowMeSection() {
	return (
		<div>
			<div id="followme" className="g__body-container ">
				<GlobalSectionStarter
					title="Follow me"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-5 pb-[80px]">
					<FollowMeItem />
					<FollowMeItem />
					<FollowMeItem />
					<FollowMeItem />
				</div>
			</div>
		</div>
	);
}

export default FollowMeSection;
