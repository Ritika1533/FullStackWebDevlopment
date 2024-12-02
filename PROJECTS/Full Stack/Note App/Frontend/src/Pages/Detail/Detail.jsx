import React from "react";
import { useNavigate } from "react-router-dom";
function Detail() {
	const navigate = useNavigate("");
	const loginPage = () => {
		navigate("/login");
	};
	const registerPage = () => {
		navigate("/signup");
	};
	return (
		<div >
			<div className="flex flex-col items-center justify-center mt-32">
				<h3 class="mb-4 text-md font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-2xl">
					<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 transition-all duration-300 delay-200 ease-in-out hover:bg-gradient-to-r hover:from-emerald-600 hover:to-sky-400">
						MemoMate: Simplify, Organize, Create, Achieve
					</span>
				</h3>

				<h2 className="text-center text-white">
					Your personal space for effortless note-taking and organization.
					<br /> Keep track of your thoughts, tasks, and ideas all in one place.
					With MemoMate,
					<br /> managing your notes has never been easier.
				</h2>
				<div className="flex items-center justify-center mt-6">
					<button
						type="button"
						onClick={loginPage}
						class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-700 ease-in-out"
					>
						LOGIN
					</button>
					<button
						type="button"
						onClick={registerPage}
						class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition duration-700 ease-in-out"
					>
						REGISTER
					</button>
				</div>
			</div>
		</div>
	);
}

export default Detail;
