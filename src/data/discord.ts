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
	if (avatar && avatar !== null) {
		return `${config.discord.urls.avatar}/${id}/${avatar}.png`;
	}
	if (discriminator && discriminator !== null && discriminator !== "0") {
		return `${config.discord.urls.avatar}/${parseInt(discriminator) % 5}.png`;
	}
	return `${config.discord.urls.avatar}/${id.charCodeAt(id.length - 1) % 5}.png`;
};
