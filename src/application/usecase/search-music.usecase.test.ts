import { describe } from 'vitest';
import { SearchMusicUseCase } from './search-music.usecase';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { FakeMusicRepository } from 'test/fake-music.repository';

describe('SearchMusicUsecase', () => {
  let sut: SearchMusicUseCase;
  let musicRepository: MusicRepository;

  beforeEach(() => {
    musicRepository = new FakeMusicRepository();
    sut = new SearchMusicUseCase(musicRepository);
  });

  test('Should return a list of musics', async () => {
    const query = 'love';
    const musics = await sut.execute(query);
    expect(musics.length).toBe(3);
  });
});
