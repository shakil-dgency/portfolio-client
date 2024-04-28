import Image from "next/image";
import React from "react";
import img3 from "../../../../public/profile/services/web-development.svg";

function FollowMeItem() {
	return (
		<div>
			<div className="bg-[#FBFFFD20] border-[1px] border-[#00000010] p-4 flex flex-col lg:flex-row gap-3">
				<div className="w-full lg:w-[120px] h-[150px] lg:h-[120px] bg-[#E9EBEF80] border-[1px] border-[#00000008] flex justify-center items-center">
					<div className="">
						<Image src={img3} height={100} width={200} alt="" className="h-[84px] lg:h-[54px] w-[inherit]" />
						{/* <Image className={styles.character} src={google} /> */}
					</div>
				</div>
				<div className="flex-[2] flex items-center">
					<div className="">
						<h3 className=" text-center lg:text-left pt-2">Ring the bell on YouTube</h3>
						<p className="mt-2 text-[var(--para-text)] text-center lg:text-left leading-[1.6]">
							Where I teach you the best marketing tactics and publish my discoveries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FollowMeItem;
