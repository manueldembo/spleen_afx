import { test, describe } from 'vitest';
import { CreatePlaylistUsecase } from './create-playlist.usecase';
import { PlayListRepository } from 'src/domain/repositores/playlist-repository.interface';
import { FakePlayListRepository } from 'test/fake-playlist.repository';

describe('CreatePlaylistUsecase', () => {
  let sut: CreatePlaylistUsecase;
  let playlistRepository: PlayListRepository;

  beforeEach(() => {
    playlistRepository = new FakePlayListRepository();
    sut = new CreatePlaylistUsecase(playlistRepository);
  });

  test('Should return a playlist', async () => {
    const name = 'My playlist';
    const category = 'Rock';
    const ownerId = '1';

    const result = await sut.execute(name, category, ownerId);

    expect(result).toBeUndefined();
  });
});
