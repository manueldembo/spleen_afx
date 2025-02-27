import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from 'src/application/dto/login.dto';
import { LoginUsecase } from 'src/application/usecase/login.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUsecase: LoginUsecase) {}

  @Post('login')
  async login(@Body() input: LoginDTO) {
    return await this.loginUsecase.execute(input.email, input.password);
  }
}
