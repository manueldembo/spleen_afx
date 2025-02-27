import { Playlist } from 'src/domain/entities/playlist';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

export class FakePlaylistRepository implements PlaylistRepository {
  private playlists: Playlist[] = [];

  async save(playlist: Playlist): Promise<void> {
    this.playlists.push(playlist);
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlists;
  }
}
