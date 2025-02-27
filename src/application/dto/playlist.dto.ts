import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlaylistDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
