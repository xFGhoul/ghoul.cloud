export interface TvShow {
	title: string;
	cover: string;
    description?: string;
}

export const tvShows: TvShow[] = [
	{
		title: "Ozark",
		cover: "/shows/ozark.png",
		description: "A TV show I enjoyed to the very end, super good watch."
	},
	{
		title: "Money Heist",
		cover: "/shows/money-heist.jpg",
		description: "Berlin is my favorite character."
	}
];