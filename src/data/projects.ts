export interface Project {
	name: string;
	description?: string;
	repoUrl: string;
	tools: string[];
	contributor?: boolean;
}

export const projects: Project[] = [
	{
		name: "ghoul.cloud",
		description: "Personal website",
		repoUrl: "https://github.com/xFGhoul/ghoul.cloud",
		tools: [
			"Astro",
			"TypeScript",
			"Tailwind CSS",
			"Digital Ocean",
			"Biome",
			"Github",
			"Git",
		],
	},
	{
		name: "Mai",
		description: "Personal Discord Bot",
		repoUrl: "https://github.com/xFGhoul/Mai",
		tools: ["Python", "Github", "Git"],
	},
	{
		name: "Calisthenics",
		description: "React Native Mobile App",
		repoUrl: "https://github.com/TeamHypertrophy/Calisthenics",
		tools: ["React", "Redis", "TypeScript", "Github", "Git"],
	},
	{
		name: "Protein",
		description: "Rust API Backend For Hypertrophy",
		repoUrl: "https://github.com/TeamHypertrophy/Protein",
		tools: ["Rust", "PostgreSQL", "Docker", "Linux", "Redis", "Github", "Git"],
	},
	{
		name: "Pycord",
		description: "Discord API Library",
		repoUrl: "https://github.com/Pycord-Development/pycord",
		tools: ["Python", "Github", "Git"],
		contributor: true,
	},
	{
		name: "Mio",
		description: "Rust Personal Windows 11 Hub",
		repoUrl: "https://github.com/xFGhoul/Mio",
		tools: ["Rust", "Windows", "Github", "Git", "Visual Studio Code"],
	},
	{
		name: "Blog",
		description: "Personal Tech Blog",
		repoUrl: "https://github.com/xFGhoul/Blog",
		tools: [
			"Astro",
			"TypeScript",
			"Tailwind CSS",
			"Digital Ocean",
			"Biome",
			"Github",
			"Git",
		],
	},
	{
		name: "py-presencedb",
		description: "API wrapper for presencedb.com",
		repoUrl: "https://github.com/xFGhoul/py-presencedb",
		tools: ["Python", "Github", "Git"],
	},
	{
		name: "PythonProtector",
		description: "Protection Library for Python",
		repoUrl: "https://github.com/xFGhoul/PythonProtector",
		tools: ["Python", "Windows", "C++", "Github", "Git"],
	},
	{
		name: "Sakura",
		description: "Most Played Beatmaps Downloader for osu!",
		repoUrl: "https://github.com/xFGhoul/Sakura",
		tools: ["Rust", "Windows", "Github", "Git"],
	},
];
