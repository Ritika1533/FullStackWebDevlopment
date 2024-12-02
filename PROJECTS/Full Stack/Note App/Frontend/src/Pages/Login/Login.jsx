import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import validEmail from "../../helper/validEmail";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLoginForm = (e) => {
		e.preventDefault();
		if (!validEmail(email)) {
			setError("Please enter a valid email");
			return;
		}
		if (password === "") {
			setError("Please enter a password");
			return;
		}
		setError("");
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="bg-slate-800 flex items-center justify-center w-80 p-6 rounded-lg">
				<form onSubmit={handleLoginForm}>
					<div>
						<img
							src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
							alt="logo"
							className="w-14 h-14 rounded-full mx-auto"
						/>
						<h4 className="text-white mt-4 text-center">Welcome to MemoMate</h4>
					</div>
					<div className="flex flex-col items-center justify-center w-full">
						<input
							type="text"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mb-2 mt-2 p-2 rounded-lg h-8 w-full outline-none"
						/>
						<PasswordInput
							password={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{error && <p className="text-red-700">{error}</p>}{" "}
					<button
						type="submit"
						className="w-full bg-slate-500 rounded-md mt-3 mb-3 hover:bg-slate-400"
					>
						SIGN IN
					</button>
					<p className="text-sm text-center mb-4">
						New?{" "}
						<Link to={"/signup"} className=" text-blue-600 underline">
							Create Account
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
