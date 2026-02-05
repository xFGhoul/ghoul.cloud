export const config = {
	lanyard: {
		API_URL: "https://api.lanyard.rest/v1",
		WEBSOCKET_URL: "wss://api.lanyard.rest/socket",
		HEARTBEAT_PERIOD: 1000 * 30,
		SUBSCRIPTION: "subscribe_to_id",
	},
	analytics: {
		script: "https://analytics.ghoul.cloud/api/script.js",
		id: "c828a6fa1606",
	},
	toast: {
		duration: 700,
	},
	about: {
		twitter: "https://twitter.ghoul.cloud",
		github: "https://github.ghoul.cloud",
		blog: "https://blog.ghoul.cloud",
	},
	audio: {
		volume: 0.2,
	},
	background: {
		video: "/backgrounds/light/light.mp4",
		mobile: "/backgrounds/light/light-mobile.mp4",
		videoDark: "/backgrounds/dark/dark.mp4",
		mobileDark: "/backgrounds/dark/dark-mobile.mp4",
	},
	contact: {
		email: "contact@ghoul.cloud",
	},
	weather: {
		name: "Gros-Islet, Saint Lucia",
		latitude: 14.0583,
		longitude: -60.9875,
	},
	time: {
		label: "Local Time",
		timeZone: "America/St_Lucia",
	},
	discord: {
		id: "433026067050266634",
		urls: {
			avatar: "https://cdn.discordapp.com/avatars",
			default: "https://cdn.discordapp.com/embed/avatars",
			assets: "https://cdn.discordapp.com/app-assets",
			alternative: "https://dcdn.dstn.to/app-icons",
			spotify:
				"https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
		},
	},
	ascii: {
		art: `
..............................................-:............
.....................::.......................-:............
.....................+-...........-:-:..:----...............
................-+++-.............::...=##%%#*-::::.........
...............=%###%=..............:::##****#+:::..........
..........:-...-++##*:.............::::-+####*-.............
...........:...:::-:......:::.::........:---:...............
................::.......::.....:...........................
..........................:......:..........................
............................:...:...........................
............................:...:...........................
........................::........::........................
........................:..........:........................
:::::::::::...:...::....:..........:.........:::::::::::::::
:::::::..::::::::.:::::::.:........:::::::::::::::::::::::::
.....:...::.:.::..::::::::::::::::::::::::::::::..::..:....:

            hello! thanks for checking out my website.
            dev: ghoul
		`,
		color: "#76b4f1ff",
	},
	title: "</ghoul>",
};
