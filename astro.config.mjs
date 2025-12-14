// @ts-check

import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const hosts = ["ghoul.cloud", "cdn.ghoul.cloud", "analytics.ghoul.cloud", "api.ghoul.cloud", "localhost", "127.0.0.1"];

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	image: {
		domains: ["cdn.discordapp.com", "media.discordapp.net", "dcdn.dstn.to", "developer.spotify.com", "storage.googleapis.com"],
	},
	server: {
		host: true,
		allowedHosts: hosts,
	},
	vite: {
		server: {
			host: true,
			allowedHosts: hosts,
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		solidJs(),
	],
});
