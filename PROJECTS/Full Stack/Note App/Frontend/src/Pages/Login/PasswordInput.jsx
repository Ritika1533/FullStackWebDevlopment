import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function PasswordInput({ password, onChange }) {
	const [isShownPassword, setIsShownPassword] = useState(false);
	const togglePassword = () => {
		setIsShownPassword(!isShownPassword);
	};
	return (
		<div className="bg-white mb-2 mt-2 p-1 rounded-lg h-8">
			<input
				placeholder="password"
				value={password}
				type={isShownPassword ? "text" : "password"}
				onChange={onChange}
				className=" outline-none"
			/>
			<button type="button" onClick={togglePassword}>
				{isShownPassword ? <FaEye /> : <FaEyeSlash />}
			</button>
		</div>
	);
}

export default PasswordInput;
