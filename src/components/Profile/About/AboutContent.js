import React from "react";
import hamid from "../../../../public/profile/hamid.svg";
import signature from "../../../../public/profile/signature.svg";
import Image from "next/image";

function AboutContent({ data }) {
	return (
		<div>
			<div className="-mt-3 flex gap-6">
				<div className="text-[var(--para-text)] text-[16px] font-[400] max-w-[695px] lg:max-w-[495px] ">
					<div dangerouslySetInnerHTML={{ __html: data && data.about_description }} />
					{/* <p className="leading-[1.6]">
						The people I’ve the great fortune to work with every single day are the main reason for our ongoing business success. And hopefully
						continued…
					</p>
					<p className="py-[20px] leading-[1.6]">
						I work alongside some of the smartest, passionate and friendliest men and women I’ve ever met. I’m far from the ideal boss, and mistakes
						abound, but there’s something unquantifiable about coming to work every day with the same people you’d want to be around on long vacation.
					</p>
					<p className="leading-[1.6]">
						My Dgency team and I get to work with incredible Business Owners, CEO’s, VP’s and Marketing Directors every day. Our clients get me out of
						bed in the morning, and if it wasn’t for their ongoing trust, support and enthusiasm, there would be no Dgency to wake up to.
					</p> */}
					<div className="mt-[40px]">
						<Image src={signature} width={200} height={100} alt="" className=" h-[32px] w-[inherit]" />
						<p className="text-[var(--bold-text)] text-[18px] font-[500] pt-[10px] pb-[0px]">Shawon Kayum</p>
						<p className="text-[15px] text-[#555555] ">Founder and CEO</p>
					</div>
					<div className="mt-10 relative block lg:hidden">
						<Image src={data?.image.data?.attributes.url} height={300} width={500} alt="" className=" lg:h-[580px] w-[inherit] " />
						<div className="h-[35px] w-full bg-gradient-to-t from-[#fdfdfd] to-transparent absolute bottom-0 "></div>
					</div>
				</div>
				<div className="flex- -mt-[90px] relative hidden lg:block">
					<Image src={data?.image.data?.attributes.url} height={300} width={500} alt="" className=" h-[580px] w-[inherit] " />
					<div className="h-[35px] w-full bg-gradient-to-t from-[#fdfdfd] to-transparent absolute bottom-0 "></div>
				</div>
			</div>
		</div>
	);
}

export default AboutContent;
