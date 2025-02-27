import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Delete,
  Param,
} from '@nestjs/common';
import { CreatePlaylistDTO } from 'src/application/dto/playlist.dto';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { JWTGuard } from '../jwt.guard';
import { DeletePlaylistUseCase } from 'src/application/usecase/delte-playlist.usecase';

@Controller('playlists')
export class PlaylistController {
  constructor(
    private readonly createPlaylistUseCase: CreatePlaylistUsecase,
    private readonly deletePlaylistUseCase: DeletePlaylistUseCase,
  ) {}

  @UseGuards(JWTGuard)
  @Post()
  async create(@Body() input: CreatePlaylistDTO, @Request() req) {
    const ownerId = req.user.sub;
    await this.createPlaylistUseCase.execute(
      input.name,
      input.category,
      ownerId,
    );
  }

  @UseGuards(JWTGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deletePlaylistUseCase.execute(id);
  }
}
