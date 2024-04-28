import Link from "next/link";
import Script from "next/script";
import React from "react";
import img1 from "../../../public/profile/services/digital-marketing.svg";
import Image from "next/image";

function ScheduleCallBody() {
	return (
		<div>
			<div className="">
				<div className="g__body-container">
					<div className={`pt-14 md:pt-16 px-[16px] xl:px-0`}>
						<h2 className="text-[26px] text-center font-[700] mb-8 md:mb-12"></h2>
						<div className=" grid grid-cols-1 sm:grid-cols-3  gap-5">
							<div className=" max-w-[400px] sm:max-w-none mx-auto bg-[#E9EBEF] text-center rounded-lg shadow px-3 py-6 flex flex-col items-center">
								<Image src={img1} height={100} width={200} alt="" className="h-[70px] " />
								<h3 className="text-[18px] font-[500] text-[var(--bold-text)] mt-5 mb-3">Performance Review</h3>
								<p className="text-[15px] text-[var(--para-text)]">
									AdVenture shortlisted for best digital campaign in sports and fitness for Slinger Bag performance strategy.{" "}
								</p>
							</div>
							<div className=" max-w-[400px] sm:max-w-none mx-auto bg-[#E9EBEF] text-center rounded-lg shadow px-3 py-6 flex flex-col items-center">
								<Image src={img1} height={100} width={200} alt="" className="h-[70px] " />
								<h3 className="text-[18px] font-[500] text-[var(--bold-text)] mt-5 mb-3">Performance Review</h3>
								<p className="text-[15px] text-[var(--para-text)]">
									AdVenture shortlisted for best digital campaign in sports and fitness for Slinger Bag performance strategy.{" "}
								</p>
							</div>
							<div className=" max-w-[400px] sm:max-w-none mx-auto bg-[#E9EBEF] text-center rounded-lg shadow px-3 py-6 flex flex-col items-center">
								<Image src={img1} height={100} width={200} alt="" className="h-[70px] " />
								<h3 className="text-[18px] font-[500] text-[var(--bold-text)] mt-5 mb-3">Performance Review</h3>
								<p className="text-[15px] text-[var(--para-text)]">
									AdVenture shortlisted for best digital campaign in sports and fitness for Slinger Bag performance strategy.{" "}
								</p>
							</div>
						</div>
					</div>

					<div className="text-center my-10 relative z-20">
						Booking calendar will load in a second (
						<Link href={"https://calendly.com/escaperoommarketer/30min"} className="text-blue-500 underline">
							click here
						</Link>{" "}
						if it isn't loading properly):
					</div>
				</div>

				<div className="pt-16 lg:pt-10 mb-16 -mt-[70px] lg:-mt-[100px] max-w-[1000px] mx-auto px-2.5  sm:px-0 h-[1100px] lg:h-[700px]">
					<div
						className="calendly-inline-widget "
						data-url="https://calendly.com/escaperoommarketer/30min?hide_gdpr_banner=1"
						style={{ maxWidth: "1000px", height: "100%" }}
					></div>
					<Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
				</div>
			</div>
		</div>
	);
}

export default ScheduleCallBody;
