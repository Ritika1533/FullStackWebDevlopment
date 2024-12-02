import React from "react";

function HotelCard() {
	return (
		<div>
			<nav className="bg-white border-gray-200 text-sky-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<p>Booking ID : TMB035365686</p>
					<p>Vendor Booking ID : TMB035365686</p>
					<p>Booking Date : Sat. 12 Oct. 2024 14:12:56</p>
				</div>
			</nav>
			<div>
				<div>
					<img
						src="https://media.gettyimages.com/id/493734514/photo/taj-mahal-palace-hotel-in-mumbai-india.jpg?s=612x612&w=gi&k=20&c=NRfRCsWXZqfunQ6amsitPpIjQwM_xdGo0dMFqmov9xM="
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default HotelCard;
