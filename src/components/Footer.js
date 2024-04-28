"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Footer() {
	const navigate = usePathname();

	return (
		<div>
			{navigate !== "/" && (
				<div>
					<div className="bg-[#E9EBEF] pt-16 pb-14  w-full block px-[16px]">
						<div className=" g__body-container flex flex-col sm:flex-row gap-[50px] md:gap-[100px]">
							<div className="flex-[2] md:flex-1">
								<h3 className="text-[var(--bold-text)] ">About H M Hamiduzjaman</h3>
								<p className="text-[var(--para-text)] text-[16px] mt-[20px] leading-[1.6]">
									Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief,
									and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching,
									practice, worship and observance. 
								</p>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 flex-[1] md:flex-1 gap-5 md:gap-8 lg:gap-[50px] mt-1">
								<ul className="">
									<li className="text-[var(--bold-text)] text-[16px] font-[500]">Favorite Links </li>
									<div className="text-[var(--para-text)] text-[14px] pt-[15px] flex flex-col gap-2">
										<li className="">Profile</li>
										<li className="">Contact</li>
									</div>
								</ul>
								<ul className="">
									<li className="text-[var(--bold-text)] text-[16px] font-[500]">Social Links </li>
									<div className="text-[var(--para-text)] text-[14px] pt-[15px] flex flex-col gap-2">
										<li className="">LinkedIn</li>
										<li className="">Facebook</li>
										<li className="">X ( Twitter)</li>
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div className="bg-[#DFE0E2]">
						<div className="g__body-container flex flex-col sm:flex-row items-center justify-between py-3 sm:py-2 px-[16px]">
							<p className="text-[14px] text-[var(--bold-text)]">
								Made with love by{" "}
								<a href="https://dgency.com/" target="_blank" className="text-[#633ABD]">
									dgency.com
								</a>
							</p>
							<p className="text-[14px] text-[var(--bold-text)]">Privacy policy • Terms of service</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Footer;
