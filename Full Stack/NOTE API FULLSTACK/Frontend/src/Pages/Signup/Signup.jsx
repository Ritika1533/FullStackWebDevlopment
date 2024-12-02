import React, { useState } from "react";
import Password from "../../Components/Password";
import { Link } from "react-router-dom";
import { validEmail } from "../../utils/helper";
function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const handleSignUp = async (e) => {
		e.preventDefault();
		if (!name) {
			setError("Please a enter username");
			return;
		}
		if (!validEmail(email)) {
			setError("Please enter a valid email address");
			return;
		}
		if (!password) {
			setError("Please enter a password");
			return;
		}
		setError("");
		//sign up api
	};
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className="flex items-center justify-center p-6 w-96 bg-slate-600 rounded-md">
				<form className="w-full" onSubmit={handleSignUp}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7pUHHlVQQ35sHR3q-WmNMStTjys9qqH-dQ&s"
						alt="logo"
						className="mx-auto mb-4 mt-4"
					/>
					<h3 className="text-center text-2xl font-semibold mb-6">
						Create MemoMate Account
					</h3>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full px-4 py-2 mb-4  rounded-md
				 placeholder-orange-900 bg-white outline-none"
					/>
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-4 py-2 mb-4  rounded-md
				 placeholder-orange-900 bg-white outline-none"
					/>
					<Password
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					{error && (
						<p className="text-pink-950 text-center  text-sm">{error}</p>
					)}
					<button type="submit" className="btn-primary">
						Sign Up
					</button>
					<p className="text-center text-sm ">
						Already have account?{" "}
						<Link to={"/login"} className="text-lime-950 underline">
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Signup;
