import React from "react";
import styles from "@/app/style/spinner.module.css";

function Spinner() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.box}></div>
			</div>
		</div>
	);
}

export default Spinner;
