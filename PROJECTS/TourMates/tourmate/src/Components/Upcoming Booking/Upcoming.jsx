import React from "react";

function Upcoming() {
	return (
		<>
			<div class="my-5 mx-3">
				<h1 class="flex justify-center mb-7 text-4xl sm:text-3xl xs:text-2xl">
					Upcoming Bookings
				</h1>
			</div>
			<div class="px-3">
				<div class=" flex flex-wrap justify-between bg-slate-300 mb-3  rounded">
					<div class="p-3  rounded-md flex justify-center items-center">
						<div>
							<img
								class="h-32 max-w-full rounded-lg"
								src="https://media.gettyimages.com/id/493734514/photo/taj-mahal-palace-hotel-in-mumbai-india.jpg?s=612x612&w=gi&k=20&c=NRfRCsWXZqfunQ6amsitPpIjQwM_xdGo0dMFqmov9xM="
								alt=""
							/>
						</div>
						<div class="flex flex-col mx-3">
							<h1 class="mb-1 text-xl">Hotel Taj Mahal Palace</h1>
							<p class="mb-5">City, State PIN</p>
							<p>⭐⭐⭐⭐</p>
						</div>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Check In & Out</h1>
						<p>12-10-2024</p>
						<p>14-10-2024</p>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Rooms</h1>
						<p>1 X Deluxe Double</p>
						<p>1 X Delixe Triple</p>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Booking Date & ID</h1>
						<p>10-10-2024</p>
						<p class="underline">TMATES240131023</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Upcoming;
