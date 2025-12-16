export interface Tool {
	name: string;
	icon: string;
	link: string;
}

export const tools: Tool[] = [
	{ name: "Python", icon: "/icons/python.svg", link: "https://www.python.org/"},
	{ name: "C++", icon: "/icons/cpp.svg", link: "https://cplusplus.com/" },
	{ name: "TypeScript", icon: "/icons/typescript.svg", link: "https://www.typescriptlang.org/" },
	{ name: "Rust", icon: "/icons/rust.svg", link: "https://rust-lang.org" },
	{ name: "Astro", icon: "/icons/astro.svg", link: "https://astro.build/" },
	{ name: "React", icon: "/icons/react.svg", link: "https://react.dev/" },
	{ name: "PostgreSQL", icon: "/icons/postgresql.svg", link: "https://www.postgresql.org/" },
	{ name: "Redis", icon: "/icons/redis.svg", link: "https://redis.io/" },
	{ name: "Linux", icon: "/icons/linux.svg", link: "https://www.linux.org/" },
	{ name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", link: "https://tailwindcss.com/" },
	{ name: "Docker", icon: "/icons/docker.svg", link: "https://www.docker.com/" },
	{ name: "Digital Ocean", icon: "/icons/digitalocean.svg", link: "https://www.digitalocean.com/" },
	{ name: "Github", icon: "/icons/github.svg", link: "https://github.com" },
	{ name: "Git", icon: "/icons/git.svg", link: "https://git-scm.com" },
	{ name: "Windows", icon: "/icons/windows.svg", link: "https://www.microsoft.com/en-us/windows/windows-11?form=MA149L" },
	{ name: "Visual Studio Code", icon: "/icons/vscode-insiders.svg", link: "https://code.visualstudio.com/" },
	{ name: "Biome", icon: "/icons/biomejs.svg", link: "https://biomejs.dev/" },
];
