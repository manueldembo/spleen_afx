import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { AddMusicDTO, PlaylistDTO } from 'src/application/dto/playlist.dto';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { JWTGuard } from '../jwt.guard';
import { DeletePlaylistUseCase } from 'src/application/usecase/delte-playlist.usecase';
import { UpdatePlaylistUseCase } from 'src/application/usecase/update-playlist.usecase';
import { AddMusicUseCase } from 'src/application/usecase/add-music.usecase';

@Controller('playlists')
export class PlaylistController {
  constructor(
    private readonly createPlaylistUseCase: CreatePlaylistUsecase,
    private readonly deletePlaylistUseCase: DeletePlaylistUseCase,
    private readonly updatePlaylistUseCase: UpdatePlaylistUseCase,
    private readonly addMusicUseCase: AddMusicUseCase,
  ) {}

  @UseGuards(JWTGuard)
  @Post()
  async create(@Body() input: PlaylistDTO, @Request() req) {
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

  @UseGuards(JWTGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() input: PlaylistDTO) {
    await this.updatePlaylistUseCase.execute(id, input.name, input.category);
  }

  @UseGuards(JWTGuard)
  @Post('add')
  async addMusic(@Body() input: AddMusicDTO) {
    await this.addMusicUseCase.execute(input.playlistId, input.musicId);
  }
}
