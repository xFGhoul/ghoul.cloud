import { Status } from "~/lib/utils";

export interface TvShow {
	title: string;
	cover: string;
	link: string;
	description?: string;
	status: Status;
}

export const tvShows: TvShow[] = [
	{
		title: "Ozark",
		cover: "/shows/ozark.png",
		link: "https://www.imdb.com/title/tt5071412/",
		description: "A TV show I enjoyed to the very end, super good watch.",
		status: Status.COMPLETED,
	},
	{
		title: "Money Heist",
		cover: "/shows/money-heist.jpg",
		link: "https://www.imdb.com/title/tt6468322/",
		description: "Berlin is my favorite character.",
		status: Status.COMPLETED,
	},
	{
		title: "The Boys",
		cover: "/shows/the_boys.jpg",
		link: "https://www.imdb.com/title/tt1190634/",
		description: "So gruesome and real, good show.",
		status: Status.WATCHING,
	},
	{
		title: "Peaky Blinders",
		cover: "/shows/peaky_blinders.jpg",
		link: "https://www.imdb.com/title/tt2442560/",
		description: "Awesome show",
		status: Status.COMPLETED,
	},
];
