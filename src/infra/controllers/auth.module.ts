import { Module } from '@nestjs/common';
import { BcryptAdapter } from '../bcrypt-adapter';
import { UserRepositoryPostgres } from '../precistency/postgres/user.repository';
import { AuthController } from './auth.controller';
import { LoginUsecase } from 'src/application/usecase/login.usecase';
import { JWTTokenService } from '../services/jwt.service';

@Module({
  controllers: [AuthController],
  providers: [
    LoginUsecase,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryPostgres,
    },
    {
      provide: 'Encrypter',
      useClass: BcryptAdapter,
    },
    {
      provide: 'TokenService',
      useClass: JWTTokenService,
    },
  ],
})
export class AuthModule {}
