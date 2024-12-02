import React from "react";
import getInitials from "../utils/helper";

function ProfileInfo({ onLogout, userInfo }) {
	const initials = getInitials(userInfo?.username);
	// Check if userInfo exists and has a username
	// const initials =
	// 	userInfo && userInfo.username ? getInitials(userInfo.username) : "??";

	return (
		<div className="flex gap-3">
			<div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-200 font-medium">
				{getInitials(userInfo?.username)}
			</div>
			<div className="border border-gray-500 rounded-full opacity-80"></div>
			<button
				className="bg-lime-950 text-white font-light rounded-full px-4 text-center opacity-80
                hover:-translate-y-1 hover:scale-80 hover:bg-lime-600 duration-300"
				onClick={onLogout}
			>
				Logout
			</button>
		</div>
	);
}

export default ProfileInfo;
