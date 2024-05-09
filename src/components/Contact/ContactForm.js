/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import styles from "../../app/style/contact.module.css";
import cornerImg from "../../../public/contact-corner.svg";
import check from "../../../public/check-mark.svg";
import phone from "../../../public/phone.svg";

function ContactForm({ data }) {
	return (
		<div>
			<div className="g__body-container">
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-[65px] xl:gap-7 pt-20 md:pt-28 max-w-[1190px] mx-auto pb-10 md:pb-24 font-openSans px-[16px] sm:px-0">
					<div className={`${styles.form_size} xl:col-start-1 xl:col-end-2 md:max-w-2xl  xl:max-w-[415px] mx-auto`}>
						<h3 className="text-[24px] leading-[32.4px] font-[500]">
							{data?.description_title_firstline}
							<br />
							{data?.description_title_secondline}
						</h3>
						<p className="pt-[15px] md:pt-5 pb-[30px] text-[var(--bold-text)] ">{data?.list_descriptor}</p>
						<div className="pb-[60px] pl-[26px] text-[#222]">
							{data?.lists.map((item) => {
								return (
									<div className="relative pb-4 " key={item.id}>
										<Image src={check} height={10} width={15} alt="" className="absolute left-[-26px] top-[5px] " />
										<p className="text-[var(--bold-text)] text-[16px]">{item.list}</p>
									</div>
								);
							})}
						</div>
						<div className="">
							<Image src={phone} height={100} width={60} alt="" />
							<p className="text-[24px] leading-[32.4px] font-[500] pt-3">Prefer To Call?</p>
							<p className="text-[16px] font-[400]">Let's talk and get the ball rolling...</p>
							<button className=" border-[1px] border-[#633ABD] px-[20px] py-[10px] rounded-md text-[#633ABD] text-[16px]  mt-5">
								Schedule a Call
							</button>
							<div className="h-[1px] max-w-[390px] bg-[#00000010] mt-[30px] mb-[20px]"></div>
							<p className="text-[24px] font-[500]">CALL NOW</p>
							<a href={`tel:${"+8801722510266"}`} className="text-[#633ABD] text-[16px] font-[400] tracking-[0.9px] cursor-pointer">
								{data?.phone_number}
							</a>
						</div>
					</div>
					<div
						className={`${styles.form_size} row-start-1 xl:col-start-2 xl:col-end-4  md:max-w-2xl xl:max-w-[582px] mx-auto border-[1px] border-[#00000010]  bg-[#fcfcfc] px-5 md:px-12 lg:px-[25px] pt-[59px] pb-[39px] relative rounded-lg`}
					>
						<Image
							src={cornerImg}
							alt=""
							height={100}
							width={250}
							className="contact-key_image h-[130px] md:h-[168px] w-[inherit] absolute -top-16 md:-top-16 -right-[10px] sm:-right-[30px]  lg:-right-[70px]"
						/>

						<h2 className="text-center text-[20px] mb2:text-[24px] md:text-3xl font-[800] md:font-bold">{data?.form_heading}</h2>
						<div className="pt-8 sm:pt-[40px] md:pt-[50px] ">
							<div className="wrapper">
								<div className="containe">
									{/* <div className="">
										<RxCross2 onClick={handleClose} className="absolute right-5 top-4 text-[21px] cursor-pointer hover:animate-spin" />
									</div> */}
									<div className="flex flex-col sm:flex-row sm:gap-7">
										<div className="input_box flex-1">
											<input type="text" id="user" className="input-field" required placeholder="" />
											<label htmlFor="user" className="label">
												Name*
											</label>
										</div>
										<div className="input_box flex-1">
											<input type="email" id="email" className="input-field" required placeholder="" />
											<label htmlFor="email" className="label">
												Business email*
											</label>
										</div>
									</div>
									<div className="flex flex-col sm:flex-row sm:gap-7">
										<div className="input_box flex-1">
											<input type="number" id="number" className="input-field" required placeholder="" />
											<label htmlFor="number" className="label">
												Phone number*
											</label>
										</div>
										<div className="input_box flex-1">
											<input type="text" id="website" className="input-field" required placeholder="" />
											<label htmlFor="website" className="label">
												Website address*
											</label>
										</div>
									</div>
									<div className="input_box">
										<textarea name="" id="message" cols="20" rows="6" className="input-field-area resize-none" required placeholder=""></textarea>
										<label htmlFor="message" className="label">
											Message
										</label>
									</div>
									<div className="flex justify-center ">
										<button className="bg-[#633ABD] border-[] w-full py-[10px] rounded-md text-[#fff] text-[18px]  mt-2">{data?.contact_cta}</button>
									</div>
								</div>
							</div>
						</div>
						<div className="text-[var(--bold-text)] text-[14px] pt-[30px]" dangerouslySetInnerHTML={{ __html: data && data.form_note }} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
