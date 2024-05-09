"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";
// import { ChevronDown } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";

const AccordianContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
	const [selected, setSelected] = useState(value);

	useEffect(() => {
		onChange?.(selected);
	}, [selected]);

	return (
		<ul {...props}>
			<AccordianContext.Provider value={{ selected, setSelected }}>{children}</AccordianContext.Provider>
		</ul>
	);
}

export function AccordianItem({ children, value, trigger, ...props }) {
	const { selected, setSelected } = useContext(AccordianContext);
	const open = selected === value;

	const ref = useRef(null);

	return (
		<li className="max-w-[857px]  " {...props}>
			<header
				role="button"
				onClick={() => setSelected(open ? null : value)}
				className="relative flex justify-between items-center py-5 pr-5  md:p-[26px] text-[17px] font-[500] text-[var(--bold-text)]"
			>
				{trigger}
				<IoIosArrowDown size={18} className={`transition-transform absolute right-0 sm:right-4 ${open ? "rotate-180" : ""}`} />
			</header>
			<div
				className="overflow-y-hidden transition-all border-b max-w-[819px] mx-auto  text-[15px] leading-[1.6] text-[var(--para-text)]"
				style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
			>
				<div className=" pb-5 px-[15px]" ref={ref}>
					{children}
				</div>
			</div>
		</li>
	);
}
