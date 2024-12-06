// import React, { useState } from "react";
// import Favourites from "./Favourites";
// import Upcoming from "../Upcoming Booking/Upcoming";
// import Allbookings from "../Upcoming Booking/Allbookings";
// function Buttons() {
// 	const [active, setActive] = useState(null);
// 	return (
// 		<>
// 			<div class="flex justify-center my-5">
// 				<div class="inline-flex rounded-md shadow-sm" role="group">
// 					<button
// 						type="button"
// 						class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
// 						onClick={() => {
// 							setActive("booking");
// 						}}
// 					>
// 						My Bookings
// 					</button>

// 					<button
// 						type="button"
// 						class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
// 						onClick={() => {
// 							setActive("upcoming");
// 						}}
// 					>
// 						My Favourites
// 					</button>
// 				</div>
// 			</div>
// 			<div>
// 				{active === null && (
// 					<>
// 						<Favourites />
// 						<Upcoming />
// 					</>
// 				)}
// 				{active === "booking" && <Allbookings />}
// 				{active === "upcoming" && <Favourites />}
// 			</div>
// 		</>
// 	);
// }
// export default Buttons;
import React, { useState } from "react";
import Favourites from "./Favourites";
import Upcoming from "../Upcoming Booking/Upcoming";
import Allbookings from "../Upcoming Booking/Allbookings";

function Buttons() {
	const [currentTab, setCurrentTab] = useState(null);

	// Define tabs dynamically
	const tabs = [
		{ id: "booking", label: "My Bookings", component: <Allbookings /> },
		{ id: "favourites", label: "My Favourites", component: <Favourites /> },
	];

	return (
		<>
			{/* Button Group */}
			<div className="flex justify-center my-5">
				<div className="inline-flex rounded-md shadow-sm" role="tablist">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							className={`px-4 py-2 text-sm font-medium ${
								currentTab === tab.id
									? "bg-blue-700 text-white"
									: "bg-white text-gray-900 border border-gray-200"
							} rounded-${
								tab.id === "booking" ? "s" : "e"
							}-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700`}
							onClick={() => setCurrentTab(tab.id)}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* Tab Content */}
			<div>
				{currentTab === null && (
					<>
						<Favourites />
						<Upcoming />
					</>
				)}
				{tabs.map(
					(tab) =>
						currentTab === tab.id && <div key={tab.id}>{tab.component}</div>
				)}
			</div>
		</>
	);
}

export default Buttons;
