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
		description: "20/10",
		status: Status.COMPLETED,
	},
	{
		title: "Money Heist",
		cover: "/shows/money-heist.jpg",
		link: "https://www.imdb.com/title/tt6468322/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Boys",
		cover: "/shows/the_boys.jpg",
		link: "https://www.imdb.com/title/tt1190634/",
		description: "10/10",
		status: Status.WATCHING,
	},
	{
		title: "Peaky Blinders",
		cover: "/shows/peaky_blinders.jpg",
		link: "https://www.imdb.com/title/tt2442560/",
		description: "9/10",
		status: Status.COMPLETED,
	},
	{
		title: "Teen Wolf",
		cover: "/shows/teen_wolf.jpg",
		link: "https://www.imdb.com/title/tt1567432/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Game of Thrones",
		cover: "/shows/game_of_thrones.jpg",
		link: "https://www.imdb.com/title/tt0944947/",
		description: "9/10",
		status: Status.COMPLETED,
	},
	{
		title: "Stranger Things",
		cover: "/shows/stranger_things.jpg",
		link: "https://www.imdb.com/title/tt4574334/",
		description: "7/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Flash",
		cover: "/shows/the_flash.jpg",
		link: "https://www.imdb.com/title/tt3107288/",
		description: "7/10",
		status: Status.COMPLETED,
	},
	{
		title: "Arrow",
		cover: "/shows/arrow.jpg",
		link: "https://www.imdb.com/title/tt2193021/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Modern Family",
		cover: "/shows/modern_family.jpg",
		link: "https://www.imdb.com/title/tt1442437/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Forever",
		cover: "/shows/forever.jpg",
		link: "https://www.imdb.com/title/tt15515490/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Witcher",
		cover: "/shows/the_witcher.jpg",
		link: "https://www.imdb.com/title/tt5180504/",
		description: "9/10",
		status: Status.COMPLETED,
	},
	{
		title: "Top Boy",
		cover: "/shows/top_boy.jpg",
		link: "https://www.imdb.com/title/tt1830379/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "On My Block",
		cover: "/shows/on_my_block.jpg",
		link: "https://www.imdb.com/title/tt7879820/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Dynasty",
		cover: "/shows/dynasty.jpg",
		link: "https://www.imdb.com/title/tt6128300/",
		description: "7/10",
		status: Status.COMPLETED,
	},
];
