import React from "react";

function Navbar() {
	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<a
						href="https://www.linkedin.com/company/tourmates/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img src="/logo.png" className="h-8" alt="Flowbite Logo" />
					</a>
					<div className="flex items-center space-x-6 rtl:space-x-reverse">
						<img src="/user.png" className="h-8" alt="Flowbite Logo" />
					</div>
				</div>
				<hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
			</nav>
		</>
	);
}

export default Navbar;
