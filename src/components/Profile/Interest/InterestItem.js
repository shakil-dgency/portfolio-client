import React from "react";

function InterestItem({ title, borderColor, bgColor }) {
	return (
		<div className="">
			<span
				className={`border-[1px] lg:px-[30px] py-[10px] w-full lg:w-[inherit] flex justify-center lg:block`}
				style={{ background: bgColor, borderColor: borderColor }}
			>
				{title}
			</span>
		</div>
	);
}

export default InterestItem;
