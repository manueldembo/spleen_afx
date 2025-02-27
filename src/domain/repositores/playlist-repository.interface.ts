import { Playlist } from '../entities/playlist';

export interface PlaylistRepository {
  save(playlist: Playlist): Promise<void>;
  findAll(): Promise<Playlist[]>;
  delete(playlistId: string): Promise<void>;
  update(playlist: Playlist): Promise<void>;
  findById(playlistId: string): Promise<Playlist | undefined>;
}
