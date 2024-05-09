"use client";
import React, { useEffect, useState } from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import Image from "next/image";

function EducationItem({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	const [loadText, setLoadText] = useState(160);

	useEffect(() => {
		const courses = document.querySelector(".courses p");
		const child = document.createElement("span");
		if (loadText === 160) {
			child.innerHTML = "See more";
			child.classList.add(
				"ml-3",
				"text-[#633ABD]",
				"cursor-pointer",
				"relative",
				"after:absolute",
				"after:h-full",
				"after:w-[80px]",
				"after:bg-gradient-to-l",
				"after:from-[#fdfdfd]",
				"after:to-transparent",
				"after:-left-[91px]"
			);
		} else {
			child.innerHTML = "See less";
			child.classList.add("ml-3", "text-[#633ABD]", "cursor-pointer");
		}

		courses.appendChild(child);

		const handleSeeMoreClick = () => {
			if (loadText === 160) {
				setLoadText(data?.courses.length);
			} else {
				setLoadText(160);
			}
		};

		child.addEventListener("click", handleSeeMoreClick);
	}, [loadText]);
	return (
		<div>
			<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px] ">
				<div className="img min-w-[70px]">
					<Image src={data?.logo.data?.attributes.url} height={100} width={200} alt="" className="h-[70px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[640px]">
					<a {...attributes} target="__blank">
						<h3 className="">{data?.title}</h3>
					</a>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">{data?.subject}</p>
					<p className="text-[#7a7a7a] text-[15px] ">{data?.duration}</p>
					<div className="text-[var(--para-text)] text-[14px] mt-2 leading-[1.6] relative ">
						<div className="courses" dangerouslySetInnerHTML={{ __html: data?.courses.slice(0, loadText) }} />

						{/* <span className="absolut right-14 bottom-0">See More</span> */}
						{/* {index !== data.length - 1 && <span className="">.</span>} */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default EducationItem;
