import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
function Password({ value, onChange, placeholder }) {
	const [isShownPassword, setIsShownPassword] = useState(false);
	const togglePassword = () => {
		setIsShownPassword(!isShownPassword);
	};
	return (
		<div className="flex items-center rounded-md mb-2 border px-4 border-gray-300 bg-white">
			<input
				value={value}
				onChange={onChange}
				type={isShownPassword ? "text" : "password"}
				placeholder={placeholder || "Password"}
				className="w-full  py-2  
						 placeholder-orange-900 bg-white outline-none"
			/>
			<button
				type="button"
				onClick={togglePassword}
				className="ml-2 focus:outline-none"
			>
				{isShownPassword ? <FaRegEye /> : <FaRegEyeSlash />}
			</button>
		</div>
	);
}

export default Password;
