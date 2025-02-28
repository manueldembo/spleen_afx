import { describe } from 'vitest';
import { UploadMusicUseCase } from './upload-musc.usecase';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { FakeMusicRepository } from 'test/fake-music.repository';
import { NotFoundError } from '../../helpers/http.helper';

describe('UploadMusicUseCase', () => {
  let musicRepository: MusicRepository;
  let sut: UploadMusicUseCase;

  beforeEach(() => {
    (musicRepository = new FakeMusicRepository()),
      (sut = new UploadMusicUseCase(musicRepository));
  });

  test('Should return a not found if music not exist', async () => {
    await expect(
      sut.execute({} as unknown as Express.Multer.File, '123'),
    ).rejects.toThrow(NotFoundError('Music not found'));
  });
});
