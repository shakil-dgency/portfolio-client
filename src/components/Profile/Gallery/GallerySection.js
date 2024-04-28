import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import GalleryItem from "./GalleryItem";
// import img1 from "../../../../public/profile/gallery/hamid1.jpg";
import img2 from "../../../../public/profile/gallery/hamid2.jpg";
import img3 from "../../../../public/profile/gallery/hamid3.jpg";
import img4 from "../../../../public/profile/gallery/hamid4.jpg";
import img5 from "../../../../public/profile/gallery/hamid5.jpg";
import img6 from "../../../../public/profile/gallery/hamid6.jpg";
import img1 from "../../../../public/hero/heroImage.jpg";

function GallerySection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Gallery"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid mb1:grid-cols-2 md:grid-cols-3 gap-5 mb1:gap-3 mb3:gap-5">
					<GalleryItem image={img1} />

					<GalleryItem image={img2} />
					<GalleryItem image={img3} />
					<GalleryItem image={img4} />
					<GalleryItem image={img5} />
					<GalleryItem image={img6} />
				</div>
			</div>
		</div>
	);
}

export default GallerySection;
