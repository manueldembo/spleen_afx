import { Inject, Injectable } from '@nestjs/common';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

@Injectable()
export class DeletePlaylistUseCase {
  constructor(
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(playlistId: string): Promise<void> {
    await this.playlistRepository.delete(playlistId);
  }
}
