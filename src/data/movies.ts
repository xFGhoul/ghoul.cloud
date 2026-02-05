export interface Movie {
	title: string;
	cover: string;
    description?: string;
}

export const movies: Movie[] = [
	{
		title: "Oppenheimer",
		cover: "/movies/oppenheimer.jpg",
		description: "My Favourite Movie, The Absolute Best.",
	},
	{
		title: "Arrival",
		cover: "/movies/arrival.webp",
		description: "Awesome Sci-Fi Movie with a Great Story.",
	}
];