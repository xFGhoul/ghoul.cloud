// @ts-check

import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	server: {
		host: true,
		allowedHosts: ["ghoul.cloud", "cdn.ghoul.cloud", "localhost", "127.0.0.1"],
	},
	vite: {
		server: {
			host: true,
			allowedHosts: [
				"ghoul.cloud",
				"cdn.ghoul.cloud",
				"localhost",
				"127.0.0.1",
			],
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		solidJs(),
	],
});
