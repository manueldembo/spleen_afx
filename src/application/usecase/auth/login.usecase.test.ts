import { describe, test, vi } from 'vitest';
import { UnauthorizedError } from '../../helpers/http.helper';
import { LoginUsecase } from './login.usecase';
import { UserRepository } from 'src/domain/repositores/user-repository.interface';
import { FakeUserRepository } from 'test/fake-user.repository';
import { BcryptAdapter } from 'src/infra/bcrypt-adapter';
import { JWTTokenService } from 'src/infra/services/jwt.service';
import { JwtService } from '@nestjs/jwt';

describe('LoginUsecase', () => {
  let userRepository: UserRepository;
  let sut: LoginUsecase;
  let encrypter: BcryptAdapter;

  beforeEach(() => {
    userRepository = new FakeUserRepository();
    encrypter = new BcryptAdapter();
    sut = new LoginUsecase(userRepository, encrypter, mockJWTTokenService);
  });

  test('Should return unauthorized if email is not found', async () => {
    await expect(sut.execute('unauthorized-email', 'password')).rejects.toThrow(
      UnauthorizedError('Unauthorized user'),
    );
  });

  test('Should return unauthorized if password is incorrect', async () => {
    await expect(
      sut.execute('x@sample.com', 'incorrect-password'),
    ).rejects.toThrow(UnauthorizedError('Invalid credentials'));
  });

  test('Should return token if credentials are correct', async () => {
    const token = await sut.execute('x@sample.com', '123456');
    expect(token).toBeTruthy();
    expect(token).toBe('mocked_token');
  });
});

export const mockJwtService = {
  sign: vi.fn().mockReturnValue('mocked_token'),
};

export const mockJWTTokenService = new JWTTokenService(
  mockJwtService as unknown as JwtService,
);
