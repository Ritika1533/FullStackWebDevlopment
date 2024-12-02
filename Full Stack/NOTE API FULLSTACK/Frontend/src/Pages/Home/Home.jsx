import React, { useState, useEffect } from "react";
import NoteCard from "../../Components/Notecard/NoteCard";
import AddEditNotes from "./AddEditNotes";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";

function Home() {
	const { currentUser, loading, errorDispatch } = useSelector(
		(state) => state.user
	);
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();
	const [openAddEditModal, setOpenAddEditModal] = useState({
		isShown: false,
		type: "add",
		data: null,
	});

	return (
		<>
			<NavBar userInfo={userInfo} />
			<div className="container mx-auto text-white md:max-h-screen">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-md:m-5">
					<NoteCard
						title="Wake up at 6 a.m"
						date="5th June 2024"
						content="The background color is blue but doesn't change on hover."
						tags="#wakeup"
						isPinned={true}
						onEdit={() => {}}
						onDelete={() => {}}
						onPinNote={() => {}}
					/>
					<NoteCard
						title="Wake up at 6 a.m"
						date="5th June 2024"
						content="The background color is blue but doesn't change on hover."
						tags="#wakeup"
						isPinned={false}
						onEdit={() => {}}
						onDelete={() => {}}
						onPinNote={() => {}}
					/>
					<NoteCard
						title="Wake up at 6 a.m"
						date="5th June 2024"
						content="The background color is blue but doesn't change on hover."
						tags="#wakeup"
						isPinned={false}
						onEdit={() => {}}
						onDelete={() => {}}
						onPinNote={() => {}}
					/>
					<NoteCard
						title="Wake up at 6 a.m"
						date="5th June 2024"
						content="The background color is blue but doesn't change on hover."
						tags="#wakeup"
						isPinned={false}
						onEdit={() => {}}
						onDelete={() => {}}
						onPinNote={() => {}}
					/>
				</div>
			</div>
			<button
				className="btn-add"
				onClick={() =>
					setOpenAddEditModal({ isShown: true, type: "add", data: null })
				}
			>
				<MdAdd className="text-2xl" />
			</button>
			<Modal
				isOpen={openAddEditModal.isShown}
				onRequestClose={() =>
					setOpenAddEditModal({ isShown: false, type: "add", data: null })
				}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.2)",
					},
				}}
				className="w-[41%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-green-900 opacity-100 rounded-md mx-auto mt-14 p-5 overflow-scroll"
			>
				<AddEditNotes
					onClose={() =>
						setOpenAddEditModal({ isShown: false, type: "add", data: null })
					}
					noteData={openAddEditModal.data}
					type={openAddEditModal.type}
				/>
			</Modal>
		</>
	);
}

export default Home;
