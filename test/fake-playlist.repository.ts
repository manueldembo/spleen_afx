import { Playlist } from 'src/domain/entities/playlist';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

export class FakePlaylistRepository implements PlaylistRepository {
  private playlists: Playlist[] = [];

  constructor() {
    this.playlists.push(new Playlist('1', 'name', 'category', 'ownerId'));
  }

  async save(playlist: Playlist): Promise<void> {
    this.playlists.push(playlist);
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlists;
  }

  async delete(playlistId: string): Promise<void> {
    this.playlists = this.playlists.filter((p) => p.id !== playlistId);
  }
}
