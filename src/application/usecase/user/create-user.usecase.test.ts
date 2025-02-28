import { describe, test } from 'vitest';
import { CreateUserUseCase } from './create-user.usecase';
import { UserRepository } from 'src/domain/repositores/user-repository.interface';
import { BcryptAdapter } from 'src/infra/bcrypt-adapter';
import { Encrypter } from '../../ports/encrypter.interface';
import { FakeUserRepository } from 'test/fake-user.repository';

describe('Create user', () => {
  let userRepository: UserRepository;
  let encrypter: Encrypter;
  let sut: CreateUserUseCase;

  beforeEach(() => {
    userRepository = new FakeUserRepository();
    encrypter = new BcryptAdapter();
    sut = new CreateUserUseCase(userRepository, encrypter);
  });

  test('Should return a bad request if email is not valid', async () => {
    await expect(
      sut.execute('John Doe', 'invalid-email', 'password'),
    ).rejects.toThrow('Invalid email');
  });

  test('Should create a user', async () => {
    const result = await sut.execute(
      'John Doe',
      'email@sample.com',
      'password',
    );

    expect(result).toBeUndefined();
  });

  test('should return an error if email is already in use', async () => {
    await sut.execute('John Doe', 'email@sample.com', 'password');

    await expect(
      sut.execute('John Doe 2', 'email@sample.com', 'password2'),
    ).rejects.toThrow('Email is already in use');
  });
});
