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
		link: "https://www.netflix.com/title/80117552",
		description: "A TV show I enjoyed to the very end, super good watch.",
		status: Status.COMPLETED,
	},
	{
		title: "Money Heist",
		cover: "/shows/money-heist.jpg",
		link: "https://www.netflix.com/title/80192098",
		description: "Berlin is my favorite character.",
		status: Status.COMPLETED,
	},
];
