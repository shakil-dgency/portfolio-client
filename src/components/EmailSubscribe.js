import Link from "next/link";
import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

function EmailSubscribe({ component, singleNews }) {
	const [subscriber, setSubscriber] = useState("");
	const [error, setError] = useState({
		message: null,
		statusCode: null,
	});
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};
	const handleEmailPost = async (e) => {
		e.preventDefault();

		if (subscriber === "") {
			return;
		}

		// Validate email
		if (!validateEmail(subscriber)) {
			setError((prev) => ({ ...prev, message: "Invalid email address" }));
			setTimeout(() => {
				setError((prev) => ({ ...prev, message: null }));
			}, 2000);
			return;
		}

		// setError(null); // Clear previous error if email is valid

		try {
			setError((prev) => ({ ...prev, statusCode: 202 }));
			const response = await fetch("https://acumbamail.com/webhook/incoming/pcGDyJUUGXJ3okHA0NPJUnzcjzc/F1C3RuNxx8Z5axcVXMCCjg==/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "f31dc514133f42e7a1989dcb6cb9f671",
				},
				body: JSON.stringify({
					email: subscriber,
				}), // Make sure 'subscriber' is defined and contains the necessary data
			});

			if (!response.ok) {
				if (response.status === 400) {
					setError((prev) => ({ ...prev, message: "You have already subscribed with this email.", statusCode: 400 }));
					setTimeout(() => {
						setError((prev) => ({ ...prev, message: null, statusCode: null }));
					}, 2500);
				}
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if (data) {
				setError((prev) => ({ ...prev, message: "Thank you for being with us.", statusCode: 200 }));
				setTimeout(() => {
					setError((prev) => ({ ...prev, message: null, statusCode: null }));
				}, 2500);
			}
			setSubscriber("");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			{component !== "footer" ? (
				component !== "newsfeed" ? (
					<div className={``}>
						<div className="relative flex max-w-[330px] sm:max-w-[250px] mt-10">
							<input
								type="email"
								value={subscriber}
								onChange={(e) => setSubscriber(e.target.value)}
								placeholder="Type your email...."
								className="outline-none px-2 py-[10px] sm:py-[7px] w-full rounded-l-[5px] border-[1px] border-[#222222] bg-transparent text-[14px]"
							/>
							<button
								onClick={handleEmailPost}
								className={`${
									error?.statusCode === null ? "bg-[#222222]" : "bg-[#8b8b8b]"
								}  text-white px-[15px] rounded-r-[5px] text-[13px]  ml-[-10px]`}
							>
								Subscribe
							</button>
							{error.message && (
								<p
									className={`${
										error?.statusCode === null ? "bg-[#ffcdd2] before:border-[#ffcdd2]" : "bg-[#d1ffd1] before:border-[#d1ffd1]"
									} py-1.5 px-5 text-[15px] text-[#101010] absolute top-[130%] shadow rounded flex items-center gap-2 before:content-[''] before:absolute before:left-[15%] before:bottom-[100%]  before:border-[10px] before:border-solid  before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:rotate-180 `}
								>
									{error?.statusCode === null ? (
										<RiErrorWarningFill className="text-xl text-[#ef5350] font-bold " />
									) : (
										<FaRegCheckCircle className="text-lg text-[#62c762] font-bold" />
									)}
									{error.message}
								</p>
							)}
						</div>
						<p className="text-[14px] text-[#ADB5BD]  pt-2 sm:pt-1">
							Email <Link href={"/privacy-policy"}>Terms & Privacy</Link>
						</p>
					</div>
				) : (
					<div className={`subscribe h-[inherit] sm:h-[68px] mr-2.5 md:mr-0 ${singleNews ? "pb-[15px] sm:pb-0" : "pb-[25px] sm:pb-0"}`}>
						<div className="relative flex max-w-[330px] sm:max-w-[250px]">
							<input
								type="email"
								value={subscriber}
								onChange={(e) => setSubscriber(e.target.value)}
								placeholder="Type your email...."
								className="outline-none px-2 py-[10px] sm:py-[7px] w-full rounded-l-[5px] border-[1px] border-[#222222] bg-transparent"
							/>
							<button onClick={handleEmailPost} className=" bg-[#222222] text-white px-[15px] rounded-r-[5px] text-[13px]  ml-[-10px] ">
								Subscribe
							</button>
							{error.message && (
								<p
									className={`${
										error?.statusCode === null ? "bg-[#ffcdd2] before:border-[#ffcdd2]" : "bg-[#d1ffd1] before:border-[#d1ffd1]"
									} py-1.5 px-2 text-[15px] text-[#101010] absolute top-[130%] shadow rounded flex items-center gap-2 before:content-[''] before:absolute before:left-[15%] before:bottom-[100%]  before:border-[10px] before:border-solid  before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:rotate-180 `}
								>
									{error?.statusCode === null ? (
										<RiErrorWarningFill className="text-xl text-[#ef5350] font-bold " />
									) : (
										<FaRegCheckCircle className="text-lg text-[#62c762] font-bold" />
									)}
									{error.message}
								</p>
							)}
						</div>
						<p className="text-[14px] text-[var(--para-text)] text-center pt-2 sm:pt-1">
							Email <Link href={"/privacy-policy"}>Terms & Privacy</Link>
						</p>
					</div>
				)
			) : (
				<div className="w-full  max-w-[420px] md:flex-1">
					<div className="relative flex  ">
						<input
							type="email"
							value={subscriber}
							onChange={(e) => setSubscriber(e.target.value)}
							placeholder="Type your email...."
							className="outline-none px-2 py-[10px] sm:py-[15px] w-full rounded-l-[5px] border-[1px] border-[#222222] bg-transparent text-[14px]"
						/>
						<button onClick={handleEmailPost} className=" bg-[#222222] text-white px-3 sm:px-[25px] rounded-r-[5px] text-[13px]  ml-[-10px] ">
							Subscribe
						</button>
					</div>
					<p className="text-[14px] text-[var(--para-text)] pt-2 sm:pt-1">
						Email <Link href={"/privacy-policy"}>Terms & Privacy</Link>
					</p>
					{error.message && (
						<p
							className={`${
								error?.statusCode === null ? "bg-[#ffcdd2] before:border-[#ffcdd2]" : "bg-[#d1ffd1] before:border-[#d1ffd1]"
							} py-1.5 px-5 text-[15px] text-[#101010] absolute top-[80%] shadow rounded flex items-center gap-2 before:content-[''] before:absolute before:left-[15%] before:bottom-[100%]  before:border-[10px] before:border-solid  before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:rotate-180 `}
						>
							{error?.statusCode === null ? (
								<RiErrorWarningFill className="text-xl text-[#ef5350] font-bold " />
							) : (
								<FaRegCheckCircle className="text-lg text-[#62c762] font-bold" />
							)}
							{error.message}
						</p>
					)}
				</div>
			)}
		</>
	);
}

export default EmailSubscribe;
