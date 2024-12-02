import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "./TagInput";
function AddEditNotes({ onClose, noteData, type }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [tags, setTags] = useState([]);
	const [error, setError] = useState("");
	const editNote = async () => {};
	const addNewNotes = async () => {};
	const handleNote = () => {
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
			editNote();
		} else {
			addNewNotes();
		}
	};
	return (
		<div className="relative">
			<button
				className="w-10 h-10 flex items-center rounded-full justify-center absolute -top-3 -right-3 
            hover:bg-yellow-600 "
				onClick={onClose}
			>
				<MdClose className="text-xl " />
			</button>
			<div>
				<label className="input-label text-yellow-500 font-bold text-lg block text-center">
					TITLE
				</label>
				<input
					type="text"
					className="text-2xl  bg-gray-900 text-white w-full rounded-lg p-1 px-3 placeholder-slate-400 mt-2"
					placeholder="wake up at 6a.m"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div className="flex flex-col gap-2 mt-4">
				<label className="input-label text-yellow-500 font-bold text-lg text-center">
					CONTENT
				</label>
				<textarea
					type="text"
					placeholder="Content..."
					rows={5}
					cols={5}
					onChange={(e) => {
						setContent(e.target.value);
					}}
					className="text-sm bg-gray-900 text-white block rounded-lg placeholder-slate-400 p-3"
				/>
			</div>
			<div className="">
				<lable className="input-label text-yellow-500 font-bold mr-1 mt-3 text-lg block text-center ">
					TAGS
				</lable>
				<TagInput tags={tags} setTags={setTags} />
			</div>
			{error && <p className="text-white text-center mt-2 text-sm">{error}</p>}
			<button
				onClick={handleNote}
				className="w-full text-md font-semibold bg-slate-300  text-black p-2 rounded-full my-4 mb-2 hover:bg-blue-700"
			>
				Add
			</button>
		</div>
	);
}

export default AddEditNotes;
