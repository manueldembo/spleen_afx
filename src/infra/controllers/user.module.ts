import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/application/usecase/create-user.usecase';
import { FakeUserRepository } from 'test/fake-user-repository.interface';
import { BcryptAdapter } from '../bcrypt-adapter';

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