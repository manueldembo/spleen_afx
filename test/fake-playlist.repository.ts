import { PlayList } from 'src/domain/entities/playlist';
import { PlayListRepository } from 'src/domain/repositores/playlist-repository.interface';

export class FakePlayListRepository implements PlayListRepository {
  private playlists: PlayList[] = [];

  async create(playlist: PlayList): Promise<void> {
    this.playlists.push(playlist);
  }
}
