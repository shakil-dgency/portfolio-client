"use client";
import React from "react";
import styles from "../../app/style/richtext.module.css";

function TermsOfServiceBody({ data }) {
	return (
		<div>
			<div className="g__body-container px-[16px] pt-16 pb-[150px]">
				<h1 className="text-[36px] text-[var(--bold-text)] text-center mb-8">{data?.title}</h1>
				<div className={`${styles.text_area}`}>
					<div dangerouslySetInnerHTML={{ __html: data?.terms_data }} />
				</div>
			</div>
		</div>
	);
}

export default TermsOfServiceBody;
