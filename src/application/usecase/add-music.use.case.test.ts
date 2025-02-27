import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { describe } from 'vitest';
import { AddMusicUseCase } from './add-music.usecase';
import { FakeMusicRepository } from 'test/fake-music.repository';
import { NotFoundError } from '../helpers/http.helper';

describe('AddMusicUseCase', () => {
  let musicRepository: MusicRepository;
  let sut: AddMusicUseCase;

  beforeEach(() => {
    musicRepository = new FakeMusicRepository();
    sut = new AddMusicUseCase(musicRepository);
  });

  test('Should return an error if music not found', async () => {
    await expect(sut.execute('1', 'xpto')).rejects.toThrow('Music not found');
  });
});
