import Image from "next/image";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import boss from "../../../public/boss2.png";

function AboutMe() {
	return (
		<div className="mt-36">
			<div className="g__body-container">
				<div className="flex justify-between items-center ">
					<div className="">
						<div className="mb-10">
							<h2 className="">I’m Mr. Hamiduzjaman</h2>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, numquam.</p>
						</div>

						<div className="point">
							<ul className="text-lg font-[500] ml-6 flex flex-col gap-3">
								<li className="relative ">
									<IoCheckmarkDoneSharp className="absolute left-[-26px] top-[5px] " />
									<span>Lorem ipsum dolor sit amet consectetur adipisic.</span>
								</li>
								<li className="relative">
									<IoCheckmarkDoneSharp className="absolute left-[-26px] top-[5px]" />
									Lorem ipsum dolor sit, amet consectetur adipisicing.
								</li>
								<li className="relative">
									<IoCheckmarkDoneSharp className="absolute left-[-26px] top-[5px]" />
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								</li>
								<li className="relative">
									<IoCheckmarkDoneSharp className="absolute left-[-26px] top-[5px]" />
									Lorem ipsum dolor sit amet consectetur .
								</li>
							</ul>
							<button className="border-[1px] border-[#383838] bg-transparent px-8 py-2 text-lg font-[500] rounded-md mt-8 hover:bg-[#383838] hover:text-white">
								Learn More
							</button>
						</div>
					</div>
					<div className="photo ">
						<Image src={boss} alt="this is image" className="-mt-16" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
