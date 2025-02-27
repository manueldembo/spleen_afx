import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { describe, test } from 'vitest';
import { DeletePlaylistUseCase } from './delte-playlist.usecase';
import { FakePlaylistRepository } from 'test/fake-playlist.repository';

describe('DeletePlaylistUsecase', () => {
  let playlistRepository: PlaylistRepository;
  let sut: DeletePlaylistUseCase;

  beforeEach(() => {
    playlistRepository = new FakePlaylistRepository();
    sut = new DeletePlaylistUseCase(playlistRepository);
  });

  test('Should delete a playlist', async () => {
    const playlistId = '1';
    await sut.execute(playlistId);

    const playlists = await playlistRepository.findAll();
    expect(playlists).toHaveLength(0);
  });
});
