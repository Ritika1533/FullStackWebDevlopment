import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [Jokes, setJokes] = useState([]);
	const [randomIndex, setRandomIndex] = useState(null);

	useEffect(() => {
		axios
			.get("/api/jokes")
			.then((response) => {
				console.log("Fetched jokes:", response.data); // Debug log
				setJokes(response.data);
				if (response.data.length > 0) {
					setRandomIndex(Math.floor(Math.random() * response.data.length));
				}
			})
			.catch((error) => {
				console.error("Error fetching data:", error.message);
			});
	}, []);

	const getRandomJoke = () => {
		if (Jokes.length > 0) {
			setRandomIndex(Math.floor(Math.random() * Jokes.length));
		}
	};

	return (
		<div className="container">
			<img
				src="https://dp-cdn.codementor.io/images/projects/cm-intro-alpaca.svg"
				alt="Alpaca"
			/>
			<button style={{ marginTop: "10px" }} onClick={getRandomJoke}>
				TELL ME A JOKE
			</button>

			<p style={{ fontStyle: "italic", color: "white" }}>
				{randomIndex !== null && Jokes[randomIndex] ? (
					Jokes[randomIndex].newjoke
				) : (
					<p style={{ fontStyle: "italic", color: "white" }}></p>
				)}
			</p>
		</div>
	);
}

export default App;
