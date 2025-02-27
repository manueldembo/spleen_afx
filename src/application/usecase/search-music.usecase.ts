import { Injectable } from '@nestjs/common';
import { Music } from 'src/domain/entities/music';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';

@Injectable()
export class SearchMusicUseCase {
  constructor(private readonly musicRepository: MusicRepository) {}

  async execute(query: string): Promise<Music[]> {
    return this.musicRepository.search(query.toLocaleLowerCase());
  }
}
