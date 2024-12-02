// // Favourites.js
import React from "react";
import Fav from "./Fav";
import Cards from "./Cards";

function Favourites() {
	return (
		<>
			<div className="mx-6">
				<h1 className="flex justify-center mb-7 text-4xl">
					Your Favorites Properties
				</h1>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					<Cards
						srcImg={Fav[0].srcImg}
						title={Fav[0].title}
						city={Fav[0].city}
						star={Fav[0].star}
					/>
					<Cards
						srcImg={Fav[1].srcImg}
						title={Fav[1].title}
						city={Fav[1].city}
						star={Fav[1].star}
					/>
					<Cards
						srcImg={Fav[2].srcImg}
						title={Fav[2].title}
						city={Fav[2].city}
						star={Fav[2].star}
					/>
					<Cards
						srcImg={Fav[3].srcImg}
						title={Fav[3].title}
						city={Fav[3].city}
						star={Fav[3].star}
					/>
				</div>
			</div>
		</>
	);
}

export default Favourites;
