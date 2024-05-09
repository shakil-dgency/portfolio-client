"use client";
import React, { useEffect, useState } from "react";
import Accordion, { AccordianItem } from "./Accordion";

function Faq({ data }) {
	// const [selectedItem, setSelectedItem] = useState(null);

	// // Function to handle item selection
	// const handleItemClick = (value) => {
	// 	setSelectedItem(value);
	// };

	// useEffect(() => {
	// 	// Set the first item as selected on initial render
	// 	const firstItemValue = "1";
	// 	setSelectedItem(firstItemValue);
	// }, []); // Run this effect only once on initial render
	return (
		<div className=" ">
			<Accordion className="flex flex-col ">
				{data.map((item) => {
					return (
						<AccordianItem value={item?.faq_id} trigger={item?.question} key={item?.id}>
							{item?.answer}
						</AccordianItem>
					);
				})}
			</Accordion>
		</div>
	);
}

export default Faq;
