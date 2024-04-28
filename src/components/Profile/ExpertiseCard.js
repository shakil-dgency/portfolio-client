import React from "react";
import styles from "@/app/style/expertise.module.css";

import google3d from "../../../public/google.png";
import google2 from "../../../public/google2.png";
import Image from "next/image";

function ExpertiseCard({ title, image }) {
	return (
		<div className="">
			<div className={styles.card}>
				<div className="w-full ">
					<div className={styles.wrapper}>
						<Image className={styles.cover_image} src={image} />
						{/* <Image className={styles.character} src={google} /> */}
					</div>
				</div>
				<div className={styles.title}>
					<div className="">
						<h3 className="">{title}</h3>
						<p className=" pt-2.5 sm:pt-[15px] pb-3 text-[var(--para-text)] text-[16px] font-[400] leading-[1.5]">
							AdVenture shortlisted for best digital campaign in sports and fitness for Slinger Bag performance strategy. Principles of Marketing
							Micro Business General Commercial Law Business Communication Principles and Practices of Accounting.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpertiseCard;
