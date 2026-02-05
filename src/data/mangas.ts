import { Status } from "~/lib/utils";

interface Manga {
	title: string;
	author: string;
	cover: string;
	link: string;
	description?: string;
	status: Status;
}

export const mangas: Manga[] = [
	{
		title: "Vagabond",
		author: "Takehiko Inoue",
		cover: "/mangas/vagabond.jpg",
		link: "https://www.viz.com/vagabond",
		description: "In my honest opinion the best manga in the world.",
		status: Status.COMPLETED,
	},
];
