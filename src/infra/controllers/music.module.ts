import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { SearchMusicUseCase } from 'src/application/usecase/music/search-music.usecase';
import { MusicRepositoryPostgres } from '../precistency/postgres/music.repository';
import { UploadMusicUseCase } from 'src/application/usecase/music/upload-musc.usecase';
import { JWTGuard } from '../jwt.guard';

@Module({
  controllers: [MusicController],
  providers: [
    SearchMusicUseCase,
    UploadMusicUseCase,
    {
      provide: 'MusicRepository',
      useClass: MusicRepositoryPostgres,
    },
    JWTGuard,
  ],
})
export class MusicModule {}
