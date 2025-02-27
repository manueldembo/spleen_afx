import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { SearchMusicUseCase } from 'src/application/usecase/search-music.usecase';
import { MusicRepositoryPostgres } from '../precistency/postgres/music.repository';

@Module({
  controllers: [MusicController],
  providers: [
    SearchMusicUseCase,
    {
      provide: 'MusicRepository',
      useClass: MusicRepositoryPostgres,
    },
  ],
})
export class MusicModule {}
