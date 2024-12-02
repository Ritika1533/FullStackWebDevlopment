import React from "react";
import { TbPinnedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
function NoteCard({
	title,
	date,
	content,
	tags,
	isPinned,
	onPinNote,
	onEditNote,
	onDelete,
}) {
	return (
		<div className="bg-white rounded-xl text-black py-4 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
			<div className="flex items-center justify-between   ">
				<div>
					<h3 className="font-semibold text-lg">{title}</h3>
					<h6 className="text-lime-600">{date}</h6>
				</div>
				<TbPinnedFilled
					className={`icon-btn ${isPinned ? "text-red-500" : "text-slate-300"}`}
					onClick={onPinNote}
				/>
			</div>
			<p className="mt-3">{content ? content.slice(0, 60) : ""}</p>
			<div className="flex items-center justify-between mt-2">
				<button
					type="button"
					class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-thin rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 "
				>
					#{tags}
				</button>
				<div className="flex items-center gap-2">
					<MdModeEdit
						className="text-neutral-400 text-lg hover:text-green-500"
						onClick={onEditNote}
					/>
					<MdDeleteForever
						className="text-neutral-400 text-lg hover:text-red-500"
						onClick={onDelete}
					/>
				</div>
			</div>
		</div>
	);
}

export default NoteCard;
