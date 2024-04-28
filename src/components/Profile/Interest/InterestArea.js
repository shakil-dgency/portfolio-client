import React from "react";
import InterestItem from "./InterestItem";

function InterestArea() {
	// const color = "#633ABD";
	// const color1 = "#1B8DFF";

	const data = [
		{
			title: "Business",
			color: "#633ABD",
		},
		{
			title: "Technology",
			color: "#1B8DFF",
		},
		{
			title: "Reading",
			color: "#00A656",
		},
		{
			title: "Writing",
			color: "#0007A6",
		},
		{
			title: "Psychology",
			color: "#A60095",
		},
		{
			title: "Golf",
			color: "#0DA600",
		},
		{
			title: "Pool",
			color: "#1B8DFF",
		},
		{
			title: "Traveling",
			color: "#FF511B",
		},
	];

	return (
		<div>
			<div className="grid grid-cols-2 mb2:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-5 gap-y-5 lg:flex flex-wrap lg:gap-y-[50px] lg:gap-x-[30px]">
				{data.map((d) => {
					return <InterestItem title={d.title} borderColor={d.color + "40"} bgColor={d.color + "10"} key={d.title} />;
				})}
			</div>
		</div>
	);
}

export default InterestArea;
