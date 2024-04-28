import Image from "next/image";
import React from "react";
import profile from "../../../../public/hero/profile.jpg";

function MentorCard() {
	return (
		<div>
			<div className="max-w-[370px] bg-white p-[14px] border-[1px] border-[#633ABD20]">
				<Image src={profile} height={100} width={200} alt="" className="h-[236px] w-[inherit] object-cover" />
				<div className="">
					<h3 className="text-[var(--bold-text)] pt-4">Seth Godin</h3>
					<p className="text-[15px] text-[#7a7a7a]">American author</p>
					<p className="pt-4 text-[16px] text-[var(--para-text)] leading-[1.6]">
						Seth W. Godin, who sometimes uses the alias "F.X. Nine," is an American author and a former dot com business executive
					</p>
				</div>
			</div>
		</div>
	);
}

export default MentorCard;
