import { map } from "nanostores";
import type { Song } from "~/data/songs";

interface AudioState {
	isPlaying: boolean;
	current_song_index?: number;
	song: Song | null;
}

export const audioStore = map<AudioState>({
	isPlaying: false,
	current_song_index: undefined,
	song: null,
});
