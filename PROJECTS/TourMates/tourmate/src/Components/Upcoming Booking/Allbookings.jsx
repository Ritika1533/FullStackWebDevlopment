import React from "react";
import BookingCard from "./BookingCard";
import BookingDetails from "./BookingDetails";

function Allbookings() {
	return (
		<div>
			<div className="my-5 mx-3">
				<h1 className="flex justify-center mb-7 text-4xl sm:text-3xl xs:text-2xl">
					All Bookings
				</h1>
			</div>
			<BookingCard
				hotel={BookingDetails[1].hotel}
				location={BookingDetails[1].location}
				rooms={BookingDetails[1].rooms}
				checkIn={BookingDetails[1].checkIn}
				checkOut={BookingDetails[1].checkOut}
				rating={BookingDetails[1].rating}
				bookingDate={BookingDetails[1].bookingDate}
				bookingId={BookingDetails[1].bookingId}
			/>
			<BookingCard
				hotel={BookingDetails[2].hotel}
				location={BookingDetails[2].location}
				rooms={BookingDetails[2].rooms}
				checkIn={BookingDetails[2].checkIn}
				checkOut={BookingDetails[2].checkOut}
				rating={BookingDetails[2].rating}
				bookingDate={BookingDetails[2].bookingDate}
				bookingId={BookingDetails[2].bookingId}
			/>
			<BookingCard
				hotel={BookingDetails[3].hotel}
				location={BookingDetails[3].location}
				rooms={BookingDetails[3].rooms}
				checkIn={BookingDetails[3].checkIn}
				checkOut={BookingDetails[3].checkOut}
				rating={BookingDetails[3].rating}
				bookingDate={BookingDetails[3].bookingDate}
				bookingId={BookingDetails[3].bookingId}
			/>
		</div>
	);
}

export default Allbookings;
