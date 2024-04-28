import React from "react";
import cardImage from "../../../../public/profile/technology.jpg";
import logo1 from "../../../../public/profile/all.svg";
import logo2 from "../../../../public/profile/pickleball-logo 1.svg";
import logo3 from "../../../../public/profile/radient.svg";
import Image from "next/image";

function Card() {
	return (
		<div>
			<div className="max-w-[410px] bg-[#FBFFFD20]">
				<div className="image">
					<Image src={cardImage} alt="this is img" width={400} height={200} className="w-full h-[215px] object-cover object-center" />
				</div>
				<div className="card-body border-[1px] border-[#00000010] p-[15px] md:p-[30px]">
					<h3 className="">Retail Industry</h3>
					<p className="mt-2.5 md:mt-[8px] mb-[30px] text-[var(--para-text)] text-[16px] leading-[1.6]">
						AdVenture shortlisted for best digital campaign in sports and fitness for Slinger Bag performance strategy. Principles of Marketing Micro
						shortlisted for best Economics Bag performance strategy .
					</p>
					<div className="flex items-center gap-[10px] mb1:gap-2.5 mb3:gap-3">
						<Image src={logo1} alt="this is img" width={400} height={200} className="h-[18px] mb1:h-[25px] mb2:h-[30px] w-[inherit]" />

						<Image src={logo2} alt="this is img" width={400} height={200} className="h-[18px] mb1:h-[25px] mb2:h-[30px] w-[inherit]" />
						<Image src={logo3} alt="this is img" width={400} height={200} className="h-[18px] mb1:h-[25px] mb2:h-[30px] w-[inherit]" />
						<p className="text-[12px] mb1:text-[14px] mb2:text-[16px] text-[#555555]">20 + more...</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
