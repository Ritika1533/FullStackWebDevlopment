const Jokes = [
	{
		id: "ac158965-d90d-4b79-94c1-3b00dc22c324",
		name: "Color Me Concerned",
		newjoke:
			"A red and a blue ship have just collided in the Caribbean. Apparently, the crew is marooned.",
	},
	{
		id: "aa4ff8c4-c59f-4ae2-8469-0ad689e91e2b",
		name: "Polar Bear",
		newjoke: "What do you call a polar bear with no teeth? A gummy bear.",
	},
	{
		id: "d6f1e4d0-5fa4-4c92-bd5b-5a99ea5788f2",
		name: "The Wrong Way",
		newjoke: "How do you organize a space party? You planet.",
	},
	{
		id: "59a2fa24-4b32-4d95-8992-e2d6d5d9f1c1",
		name: "Picky Fish",
		newjoke: "Why don't fish like basketball? They're afraid of the net.",
	},
	{
		id: "db09b478-5cc8-47d5-90cb-b2da31a5a94c",
		name: "Giraffe Trouble",
		newjoke: "Why don’t giraffes like fast food? Because they can’t catch it.",
	},
	{
		id: "2e76f5b0-b8b1-4bb8-89d1-d0211a716be8",
		name: "Unfortunate Penguins",
		newjoke: "What do you call a penguin in the desert? Lost.",
	},
	{
		id: "7e4a53a1-734f-4d7e-b7cb-3d55f53e2f3f",
		name: "Noisy Ghosts",
		newjoke: "What do you call a ghost with a broken leg? A hoblin’ goblin.",
	},
	{
		id: "1b1c4370-0a8f-4d29-b682-4a2f5b9e1e4e",
		name: "Cheese Lover",
		newjoke: "What kind of cheese is made backward? Edam.",
	},
	{
		id: "a0d8a7f3-4f22-43b8-9778-5f65e30a6d71",
		name: "Funky Fruit",
		newjoke:
			"Why did the banana go to the doctor? Because it wasn’t peeling well.",
	},
	{
		id: "dd2e731f-d079-4a3b-8880-460726d03e52",
		name: "Mysterious Lightning",
		newjoke:
			"Why did the thunder break up with the lightning? It needed space.",
	},
	{
		id: "4a1656de-31b5-4a4c-b9e6-4df4b8326f65",
		name: "Dino Dance",
		newjoke: "What do you call a dinosaur that is sleeping? A dino-snore.",
	},
	{
		id: "c1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
		name: "Fluffy Clouds",
		newjoke: "Why did the cloud go to school? To become a little nimbus.",
	},
	{
		id: "ad4c75d8-2fbe-4b35-b22d-93a1d9e8c8cf",
		name: "Whale Songs",
		newjoke:
			"What do you call a whale who gets stuck in a newspaper? A blue blubber.",
	},
	{
		id: "d5c2f67b-5a8e-4f90-bd75-86d5cb2b6078",
		name: "Busy Bees",
		newjoke: "What do bees do with their hair? They use honey comb.",
	},
	{
		id: "6e4a93cd-29b6-4a1b-8f5f-59d21f7c6d80",
		name: "Tough Bear",
		newjoke: "What do you call a bear with no teeth? A gummy bear.",
	},
	{
		id: "b8b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
		name: "Fast Foods",
		newjoke:
			"Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
	},
	{
		id: "f7e6d5c4-3b2a-4d1c-b8e9-7f6e5d4c3a2b",
		name: "Funny Frogs",
		newjoke:
			"What do you call a frog that likes to play basketball? A jump shot.",
	},
	{
		id: "2d8f6b7c-9e3a-4c2d-8a1b-6e9d7f5c8b4a",
		name: "Sleepy Stars",
		newjoke: "Why did the star go to school? To get a little brighter.",
	},
	{
		id: "3e2d4b7c-5a1f-4c9e-b7d6-8a4c9d2b3e7f",
		name: "Ticklish Turtles",
		newjoke: "What do you call a turtle who takes up photography? A snapper.",
	},
	{
		id: "a3b4d2e6-7f8c-4e1d-9a2e-5b6d7c8e9f0a",
		name: "Hasty Hamsters",
		newjoke:
			"Why did the hamster cross the road? To get to the wheel on the other side.",
	},
	{
		id: "b5e6d7f8-9a0b-1c2d-3e4f-5g6h7i8j9k0l",
		name: "Funky Flamingos",
		newjoke: "What do you call a group of flamingos? A flamboyance.",
	},
	{
		id: "c6f7e8d9-a0b1-2c3d-4e5f-6g7h8i9j0k1l",
		name: "Eager Elephants",
		newjoke:
			"Why do elephants never use computers? They’re afraid of the mouse.",
	},
	{
		id: "d7e8f9a0-b1c2-3d4e-5f6g-7h8i9j0k1l2m",
		name: "Playful Penguins",
		newjoke: "What do you call a penguin who steals a drink? A peng-winner.",
	},
	{
		id: "e8f9a0b1-c2d3-4e5f-6g7h-8i9j0k1l2m3n",
		name: "Jolly Jellyfish",
		newjoke: "Why did the jellyfish go to school? To improve its sting.",
	},
	{
		id: "f9a0b1c2-d3e4-5f6g-7h8i-9j0k1l2m3n4o",
		name: "Crafty Cats",
		newjoke:
			"Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
	},
	{
		id: "a0b1c2d3-e4f5-6g7h-8i9j-0k1l2m3n4o5p",
		name: "Spooky Skeletons",
		newjoke:
			"Why did the skeleton go to the party alone? He had no body to go with him.",
	},
	{
		id: "b1c2d3e4-f5g6-7h8i-9j0k-1l2m3n4o5p6q",
		name: "Noisy Narwhals",
		newjoke: "Why did the narwhal cross the road? To get to the other tide.",
	},
];

export default Jokes;
