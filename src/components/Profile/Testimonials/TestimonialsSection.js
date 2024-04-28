import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import TestimonialSCarusel from "./TestimonialSCarusel";

function TestimonialsSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Testimonials"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<TestimonialSCarusel />
			</div>
		</div>
	);
}

export default TestimonialsSection;
