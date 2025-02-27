import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { PlaylistRepositoryPostgres } from '../precistency/postgres/playlist.repository';
import { JWTGuard } from '../jwt.guard';

@Module({
  controllers: [PlaylistController],
  providers: [
    CreatePlaylistUsecase,
    {
      provide: 'PlaylistRepository',
      useClass: PlaylistRepositoryPostgres,
    },
    JWTGuard,
  ],
})
export class PlaylistModule {}
