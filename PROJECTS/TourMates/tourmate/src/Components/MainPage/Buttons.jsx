import React, { useState } from "react";
import Favourites from "./Favourites";
import Upcoming from "../Upcoming Booking/Upcoming";
function Buttons() {
	const [active, setActive] = useState(null);
	return (
		<>
			<div class="flex justify-center my-5">
				<div class="inline-flex rounded-md shadow-sm" role="group">
					<button
						type="button"
						class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
						onClick={() => {
							setActive("booking");
						}}
					>
						My Bookings
					</button>

					<button
						type="button"
						class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
						onClick={() => {
							setActive("upcoming");
						}}
					>
						My Favourites
					</button>
				</div>
			</div>
			<div>
				{active === null && (
					<>
						<Favourites />
						<Upcoming />
					</>
				)}
				{active === "booking" && <Upcoming />}
				{active === "upcoming" && <Favourites />}
			</div>
		</>
	);
}
export default Buttons;
