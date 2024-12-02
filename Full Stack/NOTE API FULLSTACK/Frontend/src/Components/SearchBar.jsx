import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
	return (
		<div>
			<button
				className="flex items-center justify-between rounded-full bg-white
             py-1 px-2 w-40 sm:60 md:w-80 outline-0 text-gray-500 "
			>
				<input
					type="text"
					placeholder="Search Notes..."
					className="font-normal outline-0 mr-3 w-5/6"
					value={value}
					onChange={onChange}
				/>
				{value && (
					<IoMdClose
						className="cursor-pointer hover:text-black"
						onClick={onClearSearch}
					/>
				)}

				<FaMagnifyingGlass
					className="cursor-pointer hover:text-black mr-1 w-1/6"
					onClick={handleSearch}
				/>
			</button>
		</div>
	);
};

export default SearchBar;
