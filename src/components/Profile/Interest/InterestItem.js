import React from "react";

function InterestItem({ title, borderColor, bgColor }) {
	return (
		<div>
			<button className={`border-[1px] lg:px-[30px] py-[10px] w-full lg:w-[inherit]`} style={{ background: bgColor, borderColor: borderColor }}>
				{title}
			</button>
		</div>
	);
}

export default InterestItem;
