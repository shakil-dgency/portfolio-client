/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../app/style/contact.module.css";
import cornerImg from "../../../public/contact-corner.svg";
import check from "../../../public/check-mark.svg";
import phone from "../../../public/phone.svg";
import stylesRtext from "../../app/style/richtext.module.css";
import { sendContactForm } from "@/lib/contactapi";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { phoneSchema } from "@/validation/PhoneNumberValidation";

function ContactForm({ data }) {
	const [phoneState, setPhoneState] = useState(false);
	const [phoneCountryCode, setPhoneCountryCode] = useState("+1");
	const [isPhoneValid, setIsphoneValid] = useState("");
	const [isPhoneempty, setPhoneempty] = useState(true);
	const [formSubmit, setFormSubmit] = useState(false);
	const [state, setState] = useState({
		name: "",
		email: "",
		phone: "",
		website: "",
		message: "",
	});
	let contactObj = {};

	const handleKeyDown = (e) => {
		// Prevent the backspace key from removing the country code
		const isBackspaceOrDelete = e.key === "Backspace" || e.key === "Delete";
		const isCursorAtStart = e.target.selectionStart === phoneCountryCode.length;

		if (isBackspaceOrDelete && isCursorAtStart) {
			e.preventDefault();
		}
		console.log(isCursorAtStart);
	};

	const handleChange = (value, country, event) => {
		const countryCode = `+${country.dialCode}`;
		setPhoneCountryCode(countryCode);

		setState((prev) => ({ ...prev, phone: value }));
		// setCountry(country.name);
		setPhoneState(true);
	};

	useEffect(() => {
		const phoneInput = document.querySelector(".form-control");
		const phonelavel = document.querySelector(".phone_label");

		phoneInput.addEventListener("click", () => {
			setPhoneState(true);
		});
		phonelavel.addEventListener("click", () => {
			setPhoneState(true);
			phoneInput.focus()
		});
	});

	const handleClick = async (e) => {
		// if (state.name !== "" && state.phone === "" && state.email.includes("@")) {
		// 	e.preventDefault();
		// 	setState((prev) => ({ ...prev, phone: null }));
		// 	setTimeout(() => {
		// 		setState((prev) => ({ ...prev, phone: "" }));
		// 	}, 800);
		// }
		if (state.phone === "") {
			setPhoneempty(false);
			setTimeout(() => {
				setPhoneempty(true);
			}, 800);
		}
		if (state.name === "") {
			setState((prev) => ({ ...prev, name: null }));
			setTimeout(() => {
				setState((prev) => ({ ...prev, name: '' }));
			}, 800);
		}
		if (state.email === "" || !state.email.includes("@")) {
			setState((prev) => ({ ...prev, email: null }));
			setTimeout(() => {
				setState((prev) => ({ ...prev, email: state.email }));
			}, 800);
		}
		if (state.website === "") {
			setState((prev) => ({ ...prev, website: null }));
			setTimeout(() => {
				setState((prev) => ({ ...prev, website: '' }));
			}, 800);
		}

		if (state.phone !== "") {
			e.preventDefault();
			let phone = state.phone;

			try {
				await phoneSchema.validate({ phone });
				console.log("Phone number is valid");

				if (state.name !== "" && state.email.includes("@") && state.website !== "" ) {
					e.preventDefault();
					contactObj = { data: state, subject: "Contact - Hamiduzjaman Portfolio", form: "contact" };
					setFormSubmit(true)
				}

				setTimeout(() => {
					location.replace(`/thank-you`);
					// setLoad(false);
				}, 500);

				try {
					await sendContactForm(contactObj);
				} catch (error) {
					console.log(error);
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		}
	};

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
							{/* <div className="h-[1px] max-w-[390px] bg-[#00000010] mt-[30px] mb-[20px]"></div>
							<p className="text-[24px] font-[500]">CALL NOW</p>
							<a href={`tel:${"+8801722510266"}`} className="text-[#633ABD] text-[16px] font-[400] tracking-[0.9px] cursor-pointer">
								{data?.phone_number}
							</a> */}
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
											<input
												type="text"
												id="user"
												autoFocus={false}
												className="input-field contact-input"
												required
												placeholder=""
												value={state.name}
												onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
											/>
											<label htmlFor="user" className="label">
												Name*
											</label>
											{state.name === null && (
												<p className="text-[12px] rounded absolute bottom-[-45px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field
												</p>
											)}
										</div>
										<div className="input_box flex-1">
											<input
												type="email"
												id="email"
												className="input-field contact-input"
												required
												placeholder=""
												value={state.email}
												onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))}
											/>
											<label htmlFor="email" className="label">
												Business email*
											</label>
											{state.email === null && (
												<p className="text-[12px] rounded absolute bottom-[-45px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please enter a valid email
												</p>
											)}
										</div>
									</div>
									<div className="flex flex-col sm:flex-row sm:gap-7">
										<div className="input_box flex-1 ">
											<PhoneInput
												country={"us"}
												preferredCountries={["us", "ca", "gb", "au"]}
												// onChange={(value) => setPhone((prev)=>({...prev,phone:value}))}
												onChange={handleChange}
												value={state.phone}
												onKeyDown={handleKeyDown}
												inputStyle={{
													width: "100%",
													height: "100%",
													backgroundColor: "#fcfcfc",
													border: "none",
													// outlineColor: "#FF492C",
													borderRadius: "6px ",
												}}
												inputProps={{
													required: true,
												}}
												placeholder=""
												type="number"
												className="input-phone-number phone_input text-base mt-1"
											/>
											<label
												htmlFor="number"
												className={`phone_label ${
													phoneState
														? "absolute top-[-10px] left-5 text-[16px] bg-[#fcfcfc] text-[var(--bold-text)] px-[10px] duration-[0.2s]"
														: "absolute top-[20px] left-12 duration-[0.2s] text-[#7a7a7a] bg-[#fcfcfc]"
												}`}
											>
												Phone number*
											</label>
											{isPhoneempty === false && (
												<p className="text-[12px] rounded absolute bottom-[-45px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please enter a valid number
												</p>
											)}
										</div>
										<div className="input_box flex-1">
											<input
												type="text"
												id="website"
												className="input-field contact-input"
												required
												placeholder=""
												value={state.website}
												onChange={(e) => setState((prev) => ({ ...prev, website: e.target.value }))}
											/>
											<label htmlFor="website" className="label">
												Website address*
											</label>
											{state.website === null && (
												<p className="text-[12px] rounded absolute bottom-[-45px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please enter a valid email
												</p>
											)}
										</div>
									</div>
									<div className="input_box">
										<textarea
											name=""
											id="message"
											cols="20"
											rows="6"
											className="input-field-area resize-none"
											required
											placeholder=""
											value={state.message}
											onChange={(e) => setState((prev) => ({ ...prev, message: e.target.value }))}
										></textarea>
										<label htmlFor="message" className="label">
											Message
										</label>
									</div>
									<div className="flex justify-center ">
										<button onClick={handleClick} className={`${formSubmit?"bg-[#906ed9] text-[#cbcbcb]":"bg-[#633ABD]"}  border-[] w-full py-[10px] rounded-md text-[#fff] text-[18px]  mt-2`}>
											{data?.contact_cta}
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className={`${stylesRtext.text_area}`}>
							<div className="text-[var(--bold-text)] text-[14px] pt-[30px]" dangerouslySetInnerHTML={{ __html: data && data.form_note }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
