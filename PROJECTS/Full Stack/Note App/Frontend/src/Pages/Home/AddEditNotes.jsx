import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import TagInput from "./TagInput";
function AddEditNotes({ onClose, noteData, type }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [tags, setTags] = useState([]);
	const [error, setError] = useState("");
	const editNotes = async () => {};
	const addNewNotes = async () => {};
	const handleAddNote = () => {
		if (!title) {
			setError("Please enter a title");
			return;
		}
		if (!content) {
			setError("Please enter a content");
			return;
		}
		setError("");
		if (type === "edit") {
			editNotes();
		} else {
			addNewNotes();
		}
	};
	return (
		<div className="relative">
			<button
				onClick={onClose}
				className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3
             hover:bg-slate-400"
			>
				<IoClose />
			</button>
			<div>
				<label className="input-label">TITLE</label>
				<input
					className="input-box"
					type="text"
					placeholder="wake up at 6 a.m"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<div className="flex flex-col gap-2 mt-4">
					<label className="input-label">CONTENT</label>
					<textarea
						className="input-box"
						type="text"
						placeholder="Content.."
						row={10}
						col={10}
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</div>
				<div className="">
					<label className="input-label">TAGS</label>
					<TagInput tags={tags} setTags={setTags} />
				</div>
				{error && (
					<p className="text-red-600 text-center mt-2 mb-2 text-sm">{error}</p>
				)}
				<button
					onClick={handleAddNote}
					className="w-full text-md font-semibold bg-slate-300  text-black p-2 rounded-full my-4 mb-2 hover:bg-blue-950"
				>
					ADD
				</button>
			</div>
		</div>
	);
}

export default AddEditNotes;
