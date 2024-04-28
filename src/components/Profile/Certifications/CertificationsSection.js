import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CertificationItem from "./CertificationItem";

function CertificationsSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Certifications"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div>
					<CertificationItem />
				</div>
			</div>
		</div>
	);
}

export default CertificationsSection;
