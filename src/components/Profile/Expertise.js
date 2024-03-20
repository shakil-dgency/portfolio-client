import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import google from "../../../public/google.svg";
import design from "../../../public/design.png";

function Expertise() {
	return (
		<div className="">
			<div className="g__body-container ">
				<div className="mt-28 mb-16">
					<h2 className="">My Expertise and Working Areas</h2>
					<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam.</p>
				</div>
				<ExpertiseCard image={google} title="Google Marketing" />
				<ExpertiseCard image={design} title="Design Stratigist" />
			</div>
		</div>
	);
}

export default Expertise;
