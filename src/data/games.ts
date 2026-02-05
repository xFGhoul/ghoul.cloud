export interface Game {
	title: string;
	cover: string;
	link: string;
	description?: string;
}

export const games: Game[] = [
	{
		title: "Valorant",
		cover: "/games/valorant.jpg",
		link: "https://playvalorant.com/",
		description: "My Favourite Tac FPS besides Warzone 2019",
	},
];
