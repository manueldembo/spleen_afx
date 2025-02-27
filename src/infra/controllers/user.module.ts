import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/application/usecase/create-user.usecase';
import { BcryptAdapter } from '../bcrypt-adapter';
import { FakeUserRepository } from 'test/fake-user.repository';

@Module({
  controllers: [
    UserController
  ],
  providers: [
    CreateUserUseCase,
    {
      provide: 'UserRepository',
      useClass: FakeUserRepository
    },
    {
        provide: 'Encrypter',
        useClass: BcryptAdapter
    }
  ],
})
export class UserModule {}