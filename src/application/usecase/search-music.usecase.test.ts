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
    const filters = {
      query: 'love',
      artist: '',
      genre: '',
    };
    const result = await sut.execute(filters);
    expect(result.data.length).toBe(3);
  });

  test('Should return a list of musics with pagination', async () => {
    const filters = {
      query: 'love',
      artist: '',
      genre: '',
    };

    const result = await sut.execute(filters);

    expect(result.data.length).toBe(3);
    expect(result.page).toBe(1);
    expect(result.perPage).toBe(12);
    expect(result.total).toBe(1);
  });

  test('Should filter by artist', async () => {
    const filters = {
      query: '',
      artist: 'Bonga',
      genre: '',
    };

    const result = await sut.execute(filters, 1, 12);

    expect(result.data.length).toBe(2);
    expect(result.data[0].artist.toLowerCase()).toBe(
      filters.artist.toLowerCase(),
    );
    expect(result.data[1].artist.toLowerCase()).toBe(
      filters.artist.toLowerCase(),
    );
  });

  test('should filter by genre', async () => {
    const filters = {
      query: '',
      artist: '',
      genre: 'Rock',
    };

    const result = await sut.execute(filters, 1, 12);

    expect(result.data.length).toBe(2);
    expect(result.data[0].genre.toLowerCase()).toBe(
      filters.genre.toLowerCase(),
    );
    expect(result.data[1].genre.toLowerCase()).toBe(
      filters.genre.toLowerCase(),
    );
  });
});
