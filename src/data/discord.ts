import { config } from "~/config/config";

export const statusIcons: Record<string, string> = {
	online: "/icons/online.svg",
	idle: "/icons/idle.svg",
	dnd: "/icons/dnd.svg",
	offline: "/icons/offline.svg",
};

export const getPfpUrl = (
	id: string,
	discriminator?: string,
	avatar?: string | null,
): string => {
	let extension = "png";

	if (avatar?.startsWith("a_")) {
		extension = "gif";
	}

	if (avatar && avatar !== null) {
		return `${config.discord.urls.avatar}/${id}/${avatar}.${extension}`;
	}
	if (discriminator && discriminator !== null && discriminator !== "0") {
		return `${config.discord.urls.default}/${parseInt(discriminator, 10) % 5}.png`;
	}
	return `${config.discord.urls.default}/${id.charCodeAt(id.length - 1) % 5}.png`;
};

export const getBanner = () => {
	return `https://dcdn.dstn.to/banners/${config.discord.id}`;
}
