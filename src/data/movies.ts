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
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Arrival",
		cover: "/movies/arrival.webp",
		link: "https://www.imdb.com/title/tt2543164/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "A Silent Voice",
		cover: "/movies/a_silent_voice.jpeg",
		link: "https://www.imdb.com/title/tt5323662/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Your Name",
		cover: "/movies/your_name.jpg",
		link: "https://www.imdb.com/title/tt5311514/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Lego Movie",
		cover: "/movies/the_lego_movie.jpg",
		link: "https://www.imdb.com/title/tt1490017/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Interstellar",
		cover: "/movies/interstellar.jpg",
		link: "https://www.imdb.com/title/tt0816692/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Avengers: Endgame",
		cover: "/movies/avengers_endgame.jpg",
		link: "https://www.imdb.com/title/tt4154796/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Tenet",
		cover: "/movies/tenet.jpg",
		link: "https://www.imdb.com/title/tt6723592/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Spider-Man: No Way Home",
		cover: "/movies/no_way_home.jpg",
		link: "https://www.imdb.com/title/tt10872600/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Doctor Strange",
		cover: "/movies/doctor_strange.jpg",
		link: "https://www.imdb.com/title/tt1211837/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Man of Steel",
		cover: "/movies/man_of_steel.webp",
		link: "https://www.imdb.com/title/tt0770828/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Justice League",
		cover: "/movies/justice_league.jpg",
		link: "https://www.imdb.com/title/tt0974015/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Incredibles",
		cover: "/movies/incredibles.jpg",
		link: "https://www.imdb.com/title/tt0317705/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Parasite",
		cover: "/movies/parasite.jpg",
		link: "https://www.imdb.com/title/tt6751668/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Social Network",
		cover: "/movies/the_social_network.jpg",
		link: "https://www.imdb.com/title/tt1285016/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Whiplash",
		cover: "/movies/whiplash.jpg",
		link: "https://www.imdb.com/title/tt2582802/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Baby Driver",
		cover: "/movies/baby_driver.jpg",
		link: "https://www.imdb.com/title/tt3890160/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Transformers",
		cover: "/movies/transformers.jpg",
		link: "https://www.imdb.com/title/tt0418279/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "The Pope's Exorcist",
		cover: "/movies/the_popes_exorcist.jpg",
		link: "https://www.imdb.com/title/tt13375076/",
		description: "10/10",
		status: Status.COMPLETED,
	},
	{
		title: "Entergalactic",
		cover: "/movies/entergalactic.jpg",
		link: "https://www.imdb.com/title/tt10687116/",
		description: "10/10",
		status: Status.COMPLETED,
	},
];
