import { Status } from "~/lib/utils";

interface Book {
	title: string;
	cover: string;
	description?: string;
	link: string;
	status: Status;
}

export const books: Book[] = [
	{
		title: "The Way of Kings",
		cover: "/books/way_of_kings.png",
		link: "https://www.goodreads.com/book/show/7235533-the-way-of-kings",
		description: "Does anything even need to be said?",
		status: Status.COMPLETED,
	},
];
