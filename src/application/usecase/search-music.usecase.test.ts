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
    const result = await sut.execute(query);
    expect(result.data.length).toBe(3);
  });

  test('Should return a list of musics with pagination', async () => {
    const query = 'love';
    const result = await sut.execute(query);

    expect(result.data.length).toBe(3);
    expect(result.page).toBe(1);
    expect(result.perPage).toBe(12);
    expect(result.total).toBe(1);
  });
});
