import React from "react";
import { useNavigate } from "react-router-dom";
import getInitials from "../helper/getInitials";

function ProfileInfo() {
	const navigate = useNavigate();
	const onLogout = () => {
		navigate("/login");
	};
	return (
		<div className="flex  gap-3">
			<div
				className="w-12 h-12 flex items-center justify-center rounded-full
			 text-slate-950 bg-slate-200 font-medium"
			>
				{getInitials("Ritika keshri keshri")}
			</div>
			<div className="border border-gray-500 rounded-full opacity-80"></div>
			<button
				className=" bg-cyan-700 text-white font-light rounded-full px-4 text-center opacity-80
			hover:-translate-y-1 hover:scale-80 hover:bg-cyan-600 duration-300 ..."
				onClick={onLogout}
			>
				Logout
			</button>
		</div>
	);
}
export default ProfileInfo;
