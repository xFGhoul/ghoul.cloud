import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { config } from "~/config/config";

export enum Status {
	READING = "Reading",
	WATCHING = "Watching",
	COMPLETED = "Completed",
	ON_HOLD = "On Hold",
	DROPPED = "Dropped",
	PLANNED = "Planned",
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatTime = (ms: number): string => {
	const totalSeconds = Math.floor(ms / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	const pad = (num: number) => num.toString().padStart(2, "0");

	if (hours > 0) {
		return `${hours}:${pad(minutes)}:${pad(seconds)}`;
	}
	return `${minutes}:${pad(seconds)}`;
};

export function drawAscii() {
	console.log(
		`%c${config.ascii.art}`,
		`
        color: ${config.ascii.color};
        font-weight: bold;
        font-size: 12px;
        line-height: 1.2;
      `,
	);
}
