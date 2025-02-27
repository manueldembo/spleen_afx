import { Injectable } from '@nestjs/common';
import { Music } from 'src/domain/entities/music';
import { ListResult } from 'src/application/usecase/list-result';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';

@Injectable()
export class SearchMusicUseCase {
  constructor(private readonly musicRepository: MusicRepository) {}

  async execute(
    query: string,
    page = 1,
    perPage = 12,
  ): Promise<ListResult<Music>> {
    if (page <= 0) {
      page = 1;
    }
    if (perPage <= 0) {
      perPage = 12;
    }

    const musics = await this.musicRepository.search(query.toLocaleLowerCase());

    const totalItems = musics.length;
    const total = Math.ceil(totalItems / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedResult = musics.slice(start, end);

    return {
      page,
      perPage,
      total,
      data: paginatedResult,
    };
  }
}
