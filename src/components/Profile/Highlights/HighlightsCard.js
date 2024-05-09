"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

function HighlightsCard({ data }) {
	const [num, setNum] = useState();

	function extractNumber(text) {
		// Regular expression to match numbers
		var numberPattern = /\d+(\.\d+)?/g;

		// Extract numbers from the text
		var numbers = text.match(numberPattern);

		// If numbers are found, return the first one
		if (numbers) {
			var remainingText = text.replace(numberPattern, "").trim();
			return {
				number: numbers[0],
				remainingText: remainingText,
			};
		} else {
			return null;
		}
	}

	return (
		<div>
			<div className="bg-[#ECECEC] pt-[80px] lg:pt-[60px] pb-[40px] lg:pb-[20px] px-[30px] lg:max-w-[246px] relative rounded-lg border-[1px] border-[#E8E8E8]">
				<div className="img absolute top-[-45px] left-[50%] translate-x-[-50%]  h-[85px] w-[85px] rounded-full bg-[#E8E8E8] flex justify-center items-center drop-shadow">
					<Image src={data?.icon.data?.attributes.url} height={100} width={200} alt="" className=" h-[40px]" />
				</div>
				<p className="text text-center text-[var(--bold-text)]">{data?.title}</p>
				{/* <p className="text-[50px] font-[600] text-[var(--bold-text)] text-center leading-[1.1]">{data?.stat}</p> */}
				<div className="flex justify-center items-center">
					<AnimatedNumbers
						// includeComma
						// className={styles.container}
						transitions={(index) => ({
							type: "spring",
							duration: index + 0.3,
						})}
						animateToNumber={extractNumber(data?.stat).number}
						// className="text-[50px] font-[600] text-[var(--bold-text)] text-center leading-[1.1]"
						fontStyle={{
							fontSize: 50,
							color: "#202020",
							fontWeight: 600,
							textAlign: "center",
						}}
					/>
					<span className="text-[50px] font-[600] text-[var(--bold-text)] text-center leading-[1.1]">{extractNumber(data?.stat).remainingText}</span>
				</div>
			</div>
		</div>
	);
}

export default HighlightsCard;
