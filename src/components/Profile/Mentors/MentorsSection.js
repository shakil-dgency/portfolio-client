import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CaruselStructure from "../CaruselStructure";

function MentorsSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Mentors"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<CaruselStructure mentor={true} />
			</div>
		</div>
	);
}

export default MentorsSection;
