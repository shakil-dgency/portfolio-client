import React from "react";
import styles from "@/app/style/expertise.module.css";

import google3d from "../../../public/google.png";
import google2 from "../../../public/google2.png";
import Image from "next/image";

function ExpertiseCard({ data }) {
	const attributes = data?.card_slug ? { href: data?.card_slug } : {};
	return (
		<div className="">
			<div className={styles.card}>
				<div className="w-full ">
					<div className={styles.wrapper}>
						<Image height={100} width={300} className={styles.cover_image} src={data?.icon?.data?.attributes.url} />
						{/* <Image className={styles.character} src={google} /> */}
					</div>
				</div>
				<div className={styles.title}>
					<div className="">
						<a {...attributes} target="_blank">
							<h3 className="">{data.title}</h3>
						</a>
						<p className=" pt-2.5 sm:pt-[15px] pb-3 text-[var(--para-text)] text-[16px] font-[400] leading-[1.5]">{data.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpertiseCard;
