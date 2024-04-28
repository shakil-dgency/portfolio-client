import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import MembershipItem from "./MembershipItem";

function MembershipSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Membership"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
					<MembershipItem />
					<MembershipItem />
					<MembershipItem />
				</div>
			</div>
		</div>
	);
}

export default MembershipSection;
