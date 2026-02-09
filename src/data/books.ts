import { Status } from "~/lib/utils";

interface Book {
	title: string;
	author: string;
	cover: string;
	description?: string;
	link: string;
	status: Status;
}

export const books: Book[] = [
	{
		title: "The Way of Kings",
		author: "Brandon Sanderson",
		cover: "/books/way_of_kings.png",
		link: "https://www.goodreads.com/book/show/7235533-the-way-of-kings",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Words of Radiance",
		author: "Brandon Sanderson",
		cover: "/books/words_of_radiance.jpg",
		link: "https://www.goodreads.com/book/show/17332218-words-of-radiance",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Oathbringer",
		author: "Brandon Sanderson",
		cover: "/books/oathbringer.jpg",
		link: "https://www.goodreads.com/book/show/34002132-oathbringer",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Rhythm of War",
		author: "Brandon Sanderson",
		cover: "/books/rhythm_of_war.jpg",
		link: "https://www.goodreads.com/book/show/49021976-rhythm-of-war",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Wind and Truth",
		author: "Brandon Sanderson",
		cover: "/books/wind_and_truth.jpg",
		link: "https://www.goodreads.com/book/show/203578847-wind-and-truth",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Will of the Many",
		author: "James Islington",
		cover: "/books/the_will_of_the_many.jpg",
		link: "https://www.goodreads.com/book/show/58416952-the-will-of-the-many",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Strength of the Few",
		author: "James Islington",
		cover: "/books/the_strength_of_the_few.jpg",
		link: "https://www.goodreads.com/book/show/169485073-the-strength-of-the-few",
		description: "10/10",
		status: Status.READING,
	},
	{
		title: "One Dark Window",
		author: "Rachel Gillig",
		cover: "/books/one_dark_window.jpg",
		link: "https://www.goodreads.com/book/show/58340706-one-dark-window",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Two Twisted Crowns",
		author: "Rachel Gillig",
		cover: "/books/two_twisted_crowns.jpg",
		link: "https://www.goodreads.com/book/show/63910262-two-twisted-crowns",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Fourth Wing",
		author: "Rebecca Yarros",
		cover: "/books/fourth_wing.jpeg",
		link: "https://www.goodreads.com/book/show/61431922-fourth-wing",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Iron Flame",
		author: "Rebecca Yarros",
		cover: "/books/iron_flame.jpg",
		link: "https://www.goodreads.com/book/show/90202302-iron-flame",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Onyx Storm",
		author: "Rebecca Yarros",
		cover: "/books/onyx_storm.webp",
		link: "https://www.goodreads.com/book/show/209439446-onyx-storm",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Sword of Kaigen",
		author: "M. L. Wang",
		cover: "/books/the_sword_of_kaigen.jpg",
		link: "https://www.goodreads.com/book/show/41886271-the-sword-of-kaigen",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Project Hail Mary",
		author: "Andy Weir",
		cover: "/books/project_hail_mary.jpg",
		link: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Beginning After the End",
		author: "TurtleMe",
		cover: "/books/the_beginning_after_the_end.jpg",
		link: "https://www.goodreads.com/book/show/28705056-early-years",
		description: "10/10",
		status: Status.COMPLETED,
	},
];
