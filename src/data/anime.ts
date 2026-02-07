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
		title: "Avatar: The Last Airbender",
		cover: "/animes/avatar.jpg",
		link: "https://www.imdb.com/title/tt0417299/",
		description: "Best animated show I have seen",
		status: Status.COMPLETED,
	},
	{
		title: "Naruto",
		cover: "/animes/naruto.jpg",
		link: "https://www.imdb.com/title/tt0409591/",
		description: "One of the first animes I truly loved",
		status: Status.COMPLETED,
	}
];
