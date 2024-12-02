import React from "react";
function BookingCard({
	hotel,
	location,
	rooms,
	checkIn,
	checkOut,
	rating,
	bookingDate,
	bookingId,
}) {
	return (
		<>
			<div class="px-3">
				<div class=" flex flex-wrap justify-between bg-slate-300 mb-3  rounded">
					<div class="p-3  rounded-md flex justify-center items-center">
						<div>
							<img
								class="h-32 max-w-full rounded-lg"
								src={hotel.image}
								alt=""
							/>
						</div>
						<div class="flex flex-col mx-3">
							<h1 class="mb-1 text-xl">{hotel.name}</h1>
							<p class="mb-5">{location}</p>
							<p>{"⭐".repeat(rating)}</p>
						</div>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Check In & Out</h1>
						<p>{checkIn}</p>
						<p>{checkOut}</p>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Rooms</h1>
						<p>{rooms[0]}</p>
						<p>{rooms[1]}</p>
					</div>
					<div class="text-center">
						<h1 class="p-3 text-gray-600 text-xl mb-4">Booking Date & ID</h1>
						<p>{bookingDate}</p>
						<p class="underline">{bookingId}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default BookingCard;
