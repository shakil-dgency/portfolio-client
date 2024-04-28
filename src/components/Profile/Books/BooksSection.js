import React from "react";
import CaruselStructure from "../CaruselStructure";
import GlobalSectionStarter from "../GlobalSectionStarter";

function BooksSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Books"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<CaruselStructure books={true} />
			</div>
		</div>
	);
}

export default BooksSection;
