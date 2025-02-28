import { Inject, Injectable } from '@nestjs/common';
import {
  BadRequestError,
  NotFoundError,
} from 'src/application/helpers/http.helper';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

@Injectable()
export class RemoveMusicUseCase {
  constructor(
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(playlistId: string, musicId: string) {
    const playlist = await this.playlistRepository.findById(playlistId);
    if (!playlist) throw NotFoundError('Playlist not found');

    const exist = playlist.songs.some((s) => s === musicId);
    if (!exist) throw BadRequestError('Music not exist');

    await this.playlistRepository.removeMusic(playlistId, musicId);
  }
}
