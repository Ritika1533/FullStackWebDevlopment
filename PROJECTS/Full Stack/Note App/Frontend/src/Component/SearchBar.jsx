import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
function SearchBar() {
	const [searchQuery, setSearchQuery] = useState("");
	const onClearSearch = () => {
		setSearchQuery("");
	};
	return (
		<div>
			<button
				className="flex items-center justify-between rounded-full bg-white
             py-1 px-2 w-40 sm:60 md:w-80 outline-0 text-gray-500 "
			>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					handleSearchQuery={() => {}}
					placeholder="Search text..."
					className="text-left outline-none mr-12"
				/>
				{searchQuery && <MdClose onClick={onClearSearch} />}
				<FaMagnifyingGlass className="hover:text-black" />
			</button>
		</div>
	);
}

export default SearchBar;
