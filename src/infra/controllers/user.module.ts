import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/application/usecase/user/create-user.usecase';
import { BcryptAdapter } from '../bcrypt-adapter';
import { UserRepositoryPostgres } from '../precistency/postgres/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryPostgres,
    },
    {
      provide: 'Encrypter',
      useClass: BcryptAdapter,
    },
  ],
})
export class UserModule {}
