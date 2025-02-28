import { Inject, Injectable } from '@nestjs/common';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

@Injectable()
export class RemoveMusicUseCase {
  constructor(
    @Inject('MusicRepository')
    private readonly musicRepository: MusicRepository,
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(playlistId: string, musicId: string) {
    await this.playlistRepository.removeMusic(playlistId, musicId);
  }
}
