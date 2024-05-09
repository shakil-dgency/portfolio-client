import React from "react";
import CaruselStructure from "../CaruselStructure";
import GlobalSectionStarter from "../GlobalSectionStarter";

async function getBooksData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=books.section_head&populate[1]=books.books_card.image`, {
		next: { revalidate: 10 },
	});

	const booksData = await res.json();
	return booksData;
}

async function BooksSection() {
	const booksData = await getBooksData();
	return (
		<div>
			<div id="books" className="g__body-container ">
				<GlobalSectionStarter data={booksData?.data.attributes.books.section_head} />
				<CaruselStructure books={true} data={booksData?.data.attributes.books.books_card} />
			</div>
		</div>
	);
}

export default BooksSection;
