import React from "react";
import InterestItem from "./InterestItem";

function InterestArea({ data }) {
	// const color = "#633ABD";
	// const color1 = "#1B8DFF";

	return (
		<div>
			<div className="grid grid-cols-2 mb2:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-5 gap-y-5 lg:flex flex-wrap lg:gap-y-[50px] lg:gap-x-[30px] ">
				{data &&
					data.map((d) => {
						return <InterestItem title={d.interest_title} borderColor={d.color_code + "40"} bgColor={d.color_code + "10"} key={d.id} />;
					})}
			</div>
		</div>
	);
}

export default InterestArea;
