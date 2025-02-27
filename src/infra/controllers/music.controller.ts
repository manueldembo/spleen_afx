import { Controller, Get, Query } from '@nestjs/common';
import { SearchMusicUseCase } from 'src/application/usecase/search-music.usecase';

@Controller('musics')
export class MusicController {
  constructor(private readonly searchMusicUseCase: SearchMusicUseCase) {}

  @Get()
  async search(
    @Query('query') query: string,
    @Query('artist') artist: string,
    @Query('genre') genre: string,
    @Query('pege') page: number = 1,
    @Query('per_page') perPage: number = 12,
  ) {
    return await this.searchMusicUseCase.execute(
      { query, artist, genre },
      page,
      perPage,
    );
  }
}
