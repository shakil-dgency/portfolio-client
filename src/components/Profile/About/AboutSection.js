import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import AboutContent from "./AboutContent";

function AboutSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter title="About" />
				<AboutContent />
			</div>
		</div>
	);
}

export default AboutSection;
