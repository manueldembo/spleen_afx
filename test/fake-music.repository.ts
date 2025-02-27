import { Music } from 'src/domain/entities/music';
import {
  Filter,
  MusicRepository,
} from 'src/domain/repositores/music-repository.interface';

export class FakeMusicRepository implements MusicRepository {
  private musics: Music[] = [];

  constructor() {
    this.musics.push(
      new Music('1', 'In the name of love', 'Bonga', 'Rock', 2000, 10000),
      new Music('1', 'Love stronger', 'bonga', 'love', 1999, 1000),
      new Music('1', ' Becouse Love find me', 'xpto', 'Rock', 2020, 1000000),
    );
  }

  async search(filter: Filter): Promise<Music[]> {
    return this.musics.filter(
      (m) =>
        m.fullText.includes(filter.query) &&
        m.fullText.includes(filter.genre) &&
        m.fullText.includes(filter.artist),
    );
  }
}
