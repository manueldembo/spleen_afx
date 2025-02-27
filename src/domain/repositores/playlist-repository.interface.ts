import { Playlist } from '../entities/playlist';

export interface PlaylistRepository {
  save(playlist: Playlist): Promise<void>;
  findAll(): Promise<Playlist[]>;
  delete(playlistId: string): Promise<void>;
}
