import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { PlaylistRepositoryPostgres } from '../precistency/postgres/playlist.repository';
import { JWTGuard } from '../jwt.guard';
import { DeletePlaylistUseCase } from 'src/application/usecase/delte-playlist.usecase';

@Module({
  controllers: [PlaylistController],
  providers: [
    CreatePlaylistUsecase,
    DeletePlaylistUseCase,
    {
      provide: 'PlaylistRepository',
      useClass: PlaylistRepositoryPostgres,
    },
    JWTGuard,
  ],
})
export class PlaylistModule {}
