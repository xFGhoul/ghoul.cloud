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
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Naruto",
		cover: "/animes/naruto.jpg",
		link: "https://www.imdb.com/title/tt0409591/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Mob Psycho 100",
		cover: "/animes/mob_psycho_100.jpg",
		link: "https://www.imdb.com/title/tt5897304/",
		description: "9/10",
		status: Status.COMPLETED,
	},
	{
		title: "One Punch Man",
		cover: "/animes/one_punch_man.jpg",
		link: "https://www.imdb.com/title/tt4508902/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Daily Life of the Immortal King",
		cover: "/animes/the_daily_life_of_the_immortal_king.jpg",
		link: "https://www.imdb.com/title/tt11755260/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Demon Slayer",
		cover: "/animes/demon_slayer.png",
		link: "https://www.imdb.com/title/tt9335498/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Code Geass",
		cover: "/animes/code_geass.jpg",
		link: "https://www.imdb.com/title/tt0994314/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "My Hero Academia",
		cover: "/animes/my_hero_academia.jpg",
		link: "https://www.imdb.com/title/tt5626028/",
		description: "7/10",
		status: Status.COMPLETED,
	},
	{
		title: "Fate Stay Night: Unlimited Blade Works",
		cover: "/animes/fate_ubw.jpg",
		link: "https://www.imdb.com/title/tt3621796/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Yakusoku no Neverland",
		cover: "/animes/the_promised_neverland.jpg",
		link: "https://www.imdb.com/title/tt8788458/",
		description: "8/10",
		status: Status.COMPLETED,
	},
	{
		title: "Baki",
		cover: "/animes/baki.jpg",
		link: "https://www.imdb.com/title/tt6357658/",
		description: "7/10",
		status: Status.COMPLETED,
	},
];
