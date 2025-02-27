import { Inject, Injectable } from '@nestjs/common';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { NotFoundError } from '../helpers/http.helper';

@Injectable()
export class AddMusicUseCase {
  constructor(
    @Inject('MusicRepository')
    private readonly musicRepository: MusicRepository,
  ) {}

  async execute(playlistId: string, musicId: string): Promise<void> {
    const musicFound = await this.musicRepository.findById(musicId);
    if (!musicFound) throw NotFoundError('Music not found');
  }
}
