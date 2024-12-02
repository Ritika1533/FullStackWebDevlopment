import React, { useState } from "react";
import Password from "../../Components/Password";
import { Link, useNavigate } from "react-router-dom";
import { validEmail } from "../../utils/helper";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
	signInFailure,
	signInStart,
	signInSuccess,
} from "../../redux/user/userSlice";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!validEmail(email)) {
			setError("Please enter a valid email address");
			return;
		}
		if (!password) {
			setError("Please enter a password");
			return;
		}
		setError("");

		// login api
		try {
			dispatch(signInStart());
			const res = await axios.post(
				"http://localhost:3000/api/auth/signin",
				{ email, password },
				{ withCredentials: true }
			);
			if (res.data.success === false) {
				console.log(res.data);
				dispatch(signInFailure(res.data.message));
				return;
			}
			dispatch(signInSuccess(res.data));
			navigate("/home");
		} catch (error) {
			console.log(error);
			dispatch(signInFailure(error.message));
		}
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex items-center justify-center p-8 bg-slate-600 rounded-md">
				<form className="w-full" onSubmit={handleLogin}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7pUHHlVQQ35sHR3q-WmNMStTjys9qqH-dQ&s"
						alt="logo"
						className="mx-auto mb-4 mt-4"
					/>
					<h3 className="text-center text-2xl font-semibold mb-6">
						Welcome to MemoMate
					</h3>
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-4 py-2 mb-4 rounded-md placeholder-orange-900 bg-white outline-none"
					/>
					<Password
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && (
						<p className="text-pink-950 text-center text-sm">{error}</p>
					)}
					<button type="submit" className="btn-primary">
						Sign In
					</button>
					<p className="text-center text-sm">
						New MemoMate?{" "}
						<Link to={"/signup"} className="text-lime-950 underline">
							Create Account
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
