import { Music } from 'src/domain/entities/music';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';

export class FakeMusicRepository implements MusicRepository {
  private musics: Music[] = [];

  constructor() {
    this.musics.push(
      new Music('1', 'In the name of love', 'xpto', 'love', 2000, 10000),
      new Music('1', 'Love stronger', 'xpto', 'love', 1999, 1000),
      new Music('1', ' Becouse Love find me', 'xpto', 'love', 2020, 1000000),
    );
  }

  async search(query: string): Promise<Music[]> {
    return this.musics.filter((m) => m.fullText.includes(query));
  }
}
