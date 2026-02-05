import { Status } from "~/lib/utils";

export interface Anime {
	title: string;
	cover: string;
	description?: string;
	link: string;
	status: Status;
}

export const animes: Anime[] = [
	{
		title: "Naruto",
		cover: "/animes/naruto.jpg",
		link: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
		description: "One of the first animes I truly loved",
		status: Status.COMPLETED,
	},
];
