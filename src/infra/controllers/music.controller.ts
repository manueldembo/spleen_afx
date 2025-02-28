import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SearchMusicUseCase } from 'src/application/usecase/music/search-music.usecase';
import { multerConfig } from '../multer.config';
import { UploadMusicUseCase } from 'src/application/usecase/music/upload-musc.usecase';
import { JWTGuard } from '../jwt.guard';

@Controller('musics')
export class MusicController {
  constructor(
    private readonly searchMusicUseCase: SearchMusicUseCase,
    private readonly uploadMusicUseCase: UploadMusicUseCase,
  ) {}

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

  @UseGuards(JWTGuard)
  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  upload(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
    this.uploadMusicUseCase.execute(file, id);
  }
}
