import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
function Navbar() {
	const navigate = useNavigate("");
	const detailPage = () => {
		navigate("/");
	};
	return (
		<div className="bg-blue-950 px-2 py-2 flex items-center justify-between">
			<div className="flex items-center justify-between gap-5">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpLZY4G_ZM8gYW3Mc68SG3cOUdnTYp1c9VQ&s"
					alt="logo"
					className="w-12 h-12 rounded-full "
				/>
				<FaHome onClick={detailPage} className="text-white text-3xl" />
			</div>
			<div>
				<SearchBar />
			</div>
			<div>
				<ProfileInfo />
			</div>
		</div>
	);
}

export default Navbar;
