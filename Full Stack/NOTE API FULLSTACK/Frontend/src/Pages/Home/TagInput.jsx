import React, { useState } from "react";
import { MdClose, MdAdd } from "react-icons/md";

function TagInput({ tags, setTags }) {
	const handleRemoveTags = (tagToRemove) => {
		setTags(tags.filter((tag) => tag !== tagToRemove));
	};

	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const addNewNotes = () => {
		if (inputValue.trim() !== "") {
			setTags([...tags, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			addNewNotes();
		}
	};

	return (
		<div>
			{tags?.length > 0 && (
				<div className="flex items-center gap-2 flex-wrap">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="flex items-center gap-2 text-sm text-white bg-slate-900 px-3 py-2 rounded"
						>
							#{tag}
							<button
								onClick={() => handleRemoveTags(tag)}
								className="ml-2 text-red-500"
							>
								<MdClose />
							</button>
						</span>
					))}
				</div>
			)}
			<div className="flex items-center justify-center gap-4 mt-3">
				<input
					type="text"
					value={inputValue}
					className="text-md bg-slate-950 text-white border px-3 py-2 rounded outline-none"
					placeholder="Add text"
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
				/>
				<button
					onClick={addNewNotes}
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
