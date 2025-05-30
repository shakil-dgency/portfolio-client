"use client";
import React from "react";
import { usePathname } from "next/navigation";
import icon from "../../../public/fb_social.svg";
import Image from "next/image";
import Link from "next/link";
import EmailSubscribe from "../EmailSubscribe";

function FooterItem({ data }) {
	const navigate = usePathname();
	return (
		<div>
			{navigate !== "/" && (
				<div className="">
					<div className="bg-[#E9EBEF] pt-16 pb-14  w-full block px-[16px]">
						<div className=" g__body-container ">
							<div className="relative z-20 flex md:justify-between flex-col md:flex-row items-center  gap-8 bg-[#fff] shadow rounded-md py-[30px] sm:py-[50px] px-[16px] sm:px-[50px] -mt-[150px] mb-[50px] sm:mb-[80px]">
								<div className="max-w-[420px]  md:max-w-[348px] md:flex-1">
									<p className="text-[24px] text-[var(--bold-text)] font-[500]">{data?.card_title}</p>
									<p className="text-[14px] text-[var(--para-text)] mt-2">{data?.card_description}</p>
								</div>
								<EmailSubscribe component='footer' />
							</div>
							<div className="flex flex-col md:flex-row gap-[50px] md:gap-[60px]">
								<div className="flex-[2] md:flex-1">
									<p className="text-[var(--bold-text)] text-[20px] font-[500] ">{data?.main_title}</p>
									<p className="text-[var(--para-text)] text-[14px] mt-[20px] leading-[1.6]">{data?.description}</p>
								</div>
								<div className="grid grid-cols-1 lg:grid-cols-6 flex-[1] md:flex-1 gap-[50px] md:gap-8 lg:gap-[10px] mt-1">
									<ul className=" lg:col-start-1 lg:col-end-3">
										<li className="text-[var(--bold-text)] text-[20px] font-[500]">Favorite Links </li>
										<div className="text-[var(--para-text)] text-[14px] pt-[15px] flex flex-col gap-[15px]">
											{data?.links.map((item) => {
												return (
													<Link href={`${item.url}`} className="" key={item.id}>
														{item.link_name}
													</Link>
												);
											})}
										</div>
									</ul>
									<ul className="lg:col-start-3 lg:col-end-7 lg:ml-5">
										<li className="text-[var(--bold-text)] text-[20px] font-[500]">Social Links </li>
										<div className="text-[var(--para-text)] text-[14px] pt-[15px] flex flex-col gap-[15px]">
											{data?.social_links.map((item) => {
												return (
													<Link href={`${item.url}`} target="_blank" className="flex gap-2.5 items-center" key={item.id}>
														<Image src={item.icon.data?.attributes.url} width={25} height={25} alt="" className="" /> <span>{item.link_name}</span>
													</Link>
												);
											})}
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#DFE0E2] px-[16px]">
						<div className="g__body-container flex flex-col sm:flex-row items-center justify-between py-3 sm:py-2 ">
							<p className="text-[14px] text-[var(--bold-text)]">
								Made with love by{" "}
								<a href="https://dgency.com/" target="_blank" className="text-[#633ABD]">
									dgency.com
								</a>
							</p>
							<div className="text-[14px] text-[var(--bold-text)] pt-1">
								<Link href="/privacy-policy">Privacy policy</Link> • <Link href="/terms-of-service">Terms of service</Link> • <Link href="/site-map">Site map</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default FooterItem;
