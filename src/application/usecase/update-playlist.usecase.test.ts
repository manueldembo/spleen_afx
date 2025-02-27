import { describe, test } from 'vitest';
import { UpdatePlaylistUseCase } from './update-playlist.usecase';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { FakePlaylistRepository } from 'test/fake-playlist.repository';

describe('UpdatePlaylistUsecase', () => {
  let sut: UpdatePlaylistUseCase;
  let playlistRepository: PlaylistRepository;

  beforeEach(() => {
    playlistRepository = new FakePlaylistRepository();
    sut = new UpdatePlaylistUseCase(playlistRepository);
  });

  test('Should update a playlist', async () => {
    const name = 'New playlist name';
    const category = 'New category';
    const id = '1';
    const ownerId = '1';

    await sut.execute(id, name, category);

    const playlists = await playlistRepository.findById(id);
    expect(playlists).toHaveLength;
    expect(playlists?.name).toBe(name);
    expect(playlists?.category).toBe(category);
  });

  test('Should return an error if playlist does not exist', async () => {
    const name = 'New playlist name';
    const category = 'New category';
    const id = '2';

    await expect(sut.execute(id, name, category)).rejects.toThrow(
      'Playlist not found',
    );
  });
});
