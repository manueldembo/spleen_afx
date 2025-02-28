import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { describe } from 'vitest';
import { AddMusicUseCase } from './add-music.usecase';
import { FakeMusicRepository } from 'test/fake-music.repository';
import { FakePlaylistRepository } from 'test/fake-playlist.repository';
import { RemoveMusicUseCase } from './remove-music.usecase';

describe('RemoveMusicUseCase', () => {
  let musicRepository: MusicRepository;
  let playlistRepository: PlaylistRepository;
  let addMusicUseCase: AddMusicUseCase;
  let sut: RemoveMusicUseCase;

  beforeEach(() => {
    musicRepository = new FakeMusicRepository();
    playlistRepository = new FakePlaylistRepository();
    (addMusicUseCase = new AddMusicUseCase(
      musicRepository,
      playlistRepository,
    )),
      (sut = new RemoveMusicUseCase(musicRepository, playlistRepository));
  });

  test('should remove a music from playlist', async () => {
    const playlistId = '1';
    const musicId = '1';

    await addMusicUseCase.execute(playlistId, musicId);
    await sut.execute(playlistId, musicId);

    const playlist = await playlistRepository.findById(playlistId);
    expect(playlist?.songs.length).toBe(0);
  });
});
