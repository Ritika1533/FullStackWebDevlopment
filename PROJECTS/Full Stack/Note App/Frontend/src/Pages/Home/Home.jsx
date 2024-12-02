import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "react-modal";
import NoteCard from "./NoteCard";
import AddEditNotes from "./AddEditNotes";

function Home() {
	const [OpenAddEditModal, setOpenAddEditModal] = useState({
		isShown: false,
		type: "add",
		data: null,
	});

	return (
		<>
			<div className="container mx-auto text-white md:max-h-screen">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-md:m-5 ">
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={true}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
					<NoteCard
						title={"wake up at 6 a.m"}
						date={"12 June, 2024"}
						content={"Now when you click the home icon in the Navbar"}
						tags={"Breakfast"}
						isPinned={false}
					/>
				</div>
			</div>
			<button
				className="btn-add"
				onClick={() => {
					setOpenAddEditModal({
						isShown: true,
						type: "add",
						data: null,
					});
				}}
			>
				<FaPlus />
			</button>

			<Modal
				isOpen={OpenAddEditModal.isShown}
				onRequest={() => {}}
				style={{
					overlay: { background: "rgba(0, 0, 0, 0)" },
				}}
				className="w-[41%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white opacity-100 rounded-md
				mx-auto mt-14 p-5 overflow-scroll"
			>
				<AddEditNotes
					onClose={() => {
						setOpenAddEditModal({ isShown: false, type: "add", data: null });
					}}
					noteData={OpenAddEditModal.data}
					type={OpenAddEditModal.type}
				/>
			</Modal>
		</>
	);
}

export default Home;
