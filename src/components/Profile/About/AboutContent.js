"use client";
import React from "react";
import hamid from "../../../../public/profile/hamid.svg";
import signature from "../../../../public/profile/signature.svg";
import Image from "next/image";
import styles from "../../../app/style/richtext.module.css";

function AboutContent({ data }) {
	return (
		<div>
			<div className="-mt-3 flex gap-6">
				<div className="text-[var(--para-text)] text-[16px] font-[400] max-w-[695px] lg:max-w-[495px] ">
					<div className={`${styles.text_area}`}>
						<div dangerouslySetInnerHTML={{ __html: data && data.about_description }} />
					</div>
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
