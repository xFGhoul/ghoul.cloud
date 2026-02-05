import { Status } from "~/lib/utils";

export interface Movie {
	title: string;
	cover: string;
	link: string;
	description?: string;
	status: Status;
}

export const movies: Movie[] = [
	{
		title: "Oppenheimer",
		cover: "/movies/oppenheimer.jpg",
		link: "https://www.imdb.com/title/tt15398776/",
		description: "My Favourite Movie, The Absolute Best.",
		status: Status.COMPLETED,
	},
	{
		title: "Arrival",
		cover: "/movies/arrival.webp",
		link: "https://www.imdb.com/title/tt2543164/",
		description: "Awesome Sci-Fi Movie with a Great Story.",
		status: Status.COMPLETED,
	},
];
