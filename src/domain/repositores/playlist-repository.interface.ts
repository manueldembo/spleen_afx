import { Playlist } from '../entities/playlist';

export interface PlaylistRepository {
  save(playlist: Playlist): Promise<void>;
  findAll(): Promise<Playlist[]>;
  delete(playlistId: string): Promise<void>;
  update(
    id: string,
    ownerId: string,
    name: string,
    category: string,
  ): Promise<void>;
  findById(playlistId: string): Promise<Playlist | undefined>;
}
