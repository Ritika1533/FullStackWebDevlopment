import React from "react";
import BookingCard from "./BookingCard";
import BookingDetails from "./BookingDetails";
function Upcoming() {
	return (
		<>
			<div class="my-5 mx-3">
				<h1 class="flex justify-center mb-7 text-4xl sm:text-3xl xs:text-2xl">
					Upcoming Bookings
				</h1>
			</div>
			<BookingCard
				hotel={BookingDetails[0].hotel}
				location={BookingDetails[0].location}
				rooms={BookingDetails[0].rooms}
				checkIn={BookingDetails[0].checkIn}
				checkOut={BookingDetails[0].checkOut}
				rating={BookingDetails[0].rating}
				bookingDate={BookingDetails[0].bookingDate}
				bookingId={BookingDetails[0].bookingId}
			/>
		</>
	);
}

export default Upcoming;
