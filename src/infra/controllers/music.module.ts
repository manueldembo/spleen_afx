import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { SearchMusicUseCase } from 'src/application/usecase/search-music.usecase';
import { MusicRepositoryPostgres } from '../precistency/postgres/music.repository';
import { UploadMusicUseCase } from 'src/application/usecase/upload-musc.usecase';

@Module({
  controllers: [MusicController],
  providers: [
    SearchMusicUseCase,
    UploadMusicUseCase,
    {
      provide: 'MusicRepository',
      useClass: MusicRepositoryPostgres,
    },
  ],
})
export class MusicModule {}
