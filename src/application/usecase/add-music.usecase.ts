import { Inject, Injectable } from '@nestjs/common';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { NotFoundError } from '../helpers/http.helper';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

@Injectable()
export class AddMusicUseCase {
  constructor(
    @Inject('MusicRepository')
    private readonly musicRepository: MusicRepository,
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(playlistId: string, musicId: string): Promise<void> {
    const musicFound = await this.musicRepository.findById(musicId);
    if (!musicFound) throw NotFoundError('Music not found');

    const playlistFound = await this.playlistRepository.findById(playlistId);
    if (!playlistFound) throw NotFoundError('Playlist not found');
  }
}
