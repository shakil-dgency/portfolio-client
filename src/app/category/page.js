import CategorySection from "@/components/Category/CategorySection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

async function getCategories() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`, {
		next: { revalidate: 10 },
	});
	const categories = await res.json();

	return categories;
}

async function page() {
	const categories = await getCategories();
	return (
		<>
			<NavBar />
			<div className="mb-[170px]">
				<CategorySection categories={categories} />
			</div>

			<Footer />
		</>
	);
}

export default page;
