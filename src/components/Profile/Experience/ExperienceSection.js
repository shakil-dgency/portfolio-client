import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import ExperienceItems from "./ExperienceItems";

function ExperienceSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Experience"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-1 gap-[40px]">
					<ExperienceItems />
					<ExperienceItems />
				</div>
			</div>
		</div>
	);
}

export default ExperienceSection;
