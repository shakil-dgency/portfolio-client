import React from "react";
import styles from "../../app/style/contact.module.css";
import Image from "next/image";
import bgImg from "../../../public/contact-bg.svg";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

function ContactHero({ data }) {
	return (
		<div>
			<div className={`bg-[#F6F3FB] relative pt-[100px] pb-[60px]`}>
				<div className="g__body-container">
					<div className=" absolute top-[25px] ml-[16px] xl:ml-[0] z-30 ">
						<Link
							href="/"
							className="text-[var(--bold-text)] text-center font-[500] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
						>
							<BiChevronLeft className="text-2xl" /> BACK TO DAILY DIGEST
						</Link>
					</div>
				</div>
				<div className="text-container  m-auto pb-[10px] md:pb-[60px] px-[16px]">
					<h1 className="text-[32px] tracking-tighter leading-[1.2] text-center font-[600] relative z-20">
						{data?.title_first_line}
						<br className="hidden xl:block" />
						{data?.title_second_line}
					</h1>
					<p className="relative z-20 text-center mt-[15px] max-w-[700px] mx-auto ">{data?.description}</p>
				</div>
				<Image src={bgImg} height={300} width={600} alt="" className="absolute top-0 left-0  h-full opacity-[0.5]" />
				<Image src={bgImg} height={300} width={600} alt="" className="absolute top-0 right-0 rotate-180 h-full opacity-[0.5]" />
			</div>
			<div className="break_line image bg-[url('/devider.svg')] h-[50px] w-full bg-[length:1800px_50px] absolute z-10 mt-[-30px] rotate-180 bg-center"></div>
		</div>
	);
}

export default ContactHero;
