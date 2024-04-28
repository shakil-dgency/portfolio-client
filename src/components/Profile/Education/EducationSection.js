import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import EducationItem from "./EducationItem";

function EducationSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Education"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div>
					<EducationItem />
				</div>
			</div>
		</div>
	);
}

export default EducationSection;
