import React, { useState } from "react";
import "./navbar.css";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import { FaHome } from "react-icons/fa";

function NavBar({ userInfo }) {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		// Implement search functionality here
	};

	const onClearSearch = () => {
		setSearchQuery("");
	};

	const onHome = () => {
		navigate("/");
	};

	const onLogout = () => {
		navigate("/login");
	};

	return (
		<div className="py-3 px-6 text-yellow-600 bg-lime-800 flex items-center font-bold justify-between drop-shadow-xl">
			<div className="flex items-center space-x-6 flex-none">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7pUHHlVQQ35sHR3q-WmNMStTjys9qqH-dQ&s"
					alt="logo"
				/>
				<FaHome
					className="text-white text-4xl hover:-translate-y-1 hover:rotate-180 duration-500"
					onClick={onHome}
				/>
			</div>
			<SearchBar
				value={searchQuery}
				onChange={({ target }) => setSearchQuery(target.value)}
				handleSearch={handleSearch}
				onClearSearch={onClearSearch}
			/>
			<ProfileInfo userInfo={userInfo} onLogout={onLogout} />
		</div>
	);
}

export default NavBar;
