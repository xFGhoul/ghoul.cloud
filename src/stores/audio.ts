import { map } from 'nanostores';
import type { Song } from '~/data/songs';

interface AudioState {
    isPlaying: boolean;
    song: Song | null;
}

export const audioStore = map<AudioState>({
    isPlaying: false,
    song: null,
});