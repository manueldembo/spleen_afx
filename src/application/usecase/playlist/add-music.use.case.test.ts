import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { describe } from 'vitest';
import { AddMusicUseCase } from './add-music.usecase';
import { FakeMusicRepository } from 'test/fake-music.repository';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { FakePlaylistRepository } from 'test/fake-playlist.repository';

describe('AddMusicUseCase', () => {
  let musicRepository: MusicRepository;
  let playlistRepository: PlaylistRepository;
  let sut: AddMusicUseCase;

  beforeEach(() => {
    musicRepository = new FakeMusicRepository();
    playlistRepository = new FakePlaylistRepository();
    sut = new AddMusicUseCase(musicRepository, playlistRepository);
  });

  test('Should return an error if music not found', async () => {
    await expect(sut.execute('1', 'xpto')).rejects.toThrow('Music not found');
  });

  test('Should return an error if playlist not found', async () => {
    await expect(sut.execute('xpto', '1')).rejects.toThrow(
      'Playlist not found',
    );
  });

  test('Should add music to playlist', async () => {
    const playlistId = '1';
    const musicId = '1';

    await sut.execute(playlistId, musicId);

    const playlist = await playlistRepository.findById(playlistId);
    expect(playlist?.songs[0]).toBe(musicId);
  });

  test('Should return an error if music already exist in playlist', async () => {
    const playlistId = '1';
    const musicId = '1';

    await sut.execute(playlistId, musicId);

    await expect(sut.execute(playlistId, musicId)).rejects.toThrow(
      'This music already exist in this playlist',
    );
  });
});
