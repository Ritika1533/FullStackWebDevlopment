import React, { useState } from "react";
import { MdClose, MdAdd } from "react-icons/md";

function TagInput({ tags, setTags }) {
	const handleRemoveTag = (tagToRemove) => {
		setTags(tags.filter((tag) => tag !== tagToRemove));
	};
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const addNewTag = () => {
		if (inputValue.trim() !== "") {
			setTags([...tags, inputValue.trim()]);
			setInputValue("");
		}
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			addNewTag();
		}
	};
	return (
		<div>
			{tags?.length > 0 && (
				<div className="flex items-center gap-2 flex-wrap mt-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="flex items-center gap-2 text-sm text-slate-900 bg-slate-300 px-3 py-1 rounded"
						>
							#{tag}
							<button onClick={() => handleRemoveTag(tag)}>
								<MdClose className="text-red-600" />
							</button>
						</span>
					))}
				</div>
			)}
			<div className="flex items-center gap-4 mt-3">
				<input
					type="text"
					value={inputValue}
					className="text-sm bg-slate-300 border px-3 py-2 rounded "
					placeholder="Add tags"
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
				/>
				<button
					onClick={addNewTag}
					className="w-8 h-8 text-[#2B85FF] items-center justify-center rounded
					bg-white transition ease-in-out delay-150 
					hover:text-black hover:-translate-y-1 hover:scale-110 duration-300"
				>
					<MdAdd className="text-2xl ml-1" />
				</button>
			</div>
		</div>
	);
}

export default TagInput;
