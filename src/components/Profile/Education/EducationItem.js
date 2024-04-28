import React from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import Image from "next/image";

function EducationItem() {
	return (
		<div>
			<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px]">
				<div className="img min-w-[70px]">
					<Image src={DgencyLogo} height={100} width={200} alt="" className="h-[70px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[655px]">
					<h3 className="">University of Rajshahi</h3>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">Master of Business Administration (MBA), Marketing</p>
					<p className="text-[#7a7a7a] text-[15px]">2013 - 2014</p>
					<div className="text-[var(--para-text)] text-[14px] mt-2 leading-[1.6]">
						<span>Courses: </span>
						<span className="">Principles of Marketing</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">Micro Economics</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">Introduction to Business</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">General Commercial Law</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">Business Communication</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">Principles and Practices of Accounting</span>
						<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#6e6e6e] rounded-full inline-block"></div>
						<span className="">See More</span>
						{/* {index !== data.length - 1 && <span className="">.</span>} */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default EducationItem;
