import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import React from "react";
function NoteCard({
	isPinned,
	onPinNote,
	onEdit,
	onDelete,
	tags,
	content,
	date,
	title,
}) {
	return (
		<div className="bg-white rounded-xl text-black py-4 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
			<div className="flex items-center justify-between   ">
				<div>
					<h5 className="text-md font-semibold">{title}</h5>
					<span className="text-sm font-medium text-lime-700">{date}</span>
				</div>
				<MdOutlinePushPin
					className={`icon-btn ${
						isPinned ? "text-pink-700" : "text-purple-800"
					}`}
					onClick={onPinNote}
				/>
			</div>
			<p className="text-xs mt-2 mb-3 font-medium">{content?.slice(0, 60)}</p>
			<div className="flex items-center justify-between  mt-2">
				<button type="button" className="btn-color">
					{tags}
				</button>
				<div className="flex items-center gap-2">
					<MdCreate onClick={onEdit} className="hover:text-[#2B85FF]" />
					<MdDelete onClick={onDelete} className="hover:text-[#2B85FF]" />
				</div>
			</div>
		</div>
	);
}

export default NoteCard;
