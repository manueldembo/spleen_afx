import { UserRepository } from 'src/domain/repositores/user-repository.interface';
import { UnauthorizedError } from '../../helpers/http.helper';
import { Inject, Injectable } from '@nestjs/common';
import { Encrypter } from '../../ports/encrypter.interface';
import { TokenService } from '../../ports/token-service.interface';

@Injectable()
export class LoginUsecase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
    @Inject('Encrypter')
    private readonly encrypter: Encrypter,
    @Inject('TokenService')
    private readonly tokenService: TokenService,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    const userFound = await this.userRepository.findByEmail(email);
    if (!userFound) throw UnauthorizedError('Unauthorized user');

    const isCorrectPassword = await this.encrypter.compare(
      password,
      userFound.password,
    );

    if (!isCorrectPassword) throw UnauthorizedError('Invalid credentials');

    return this.tokenService.generateToken({ sub: userFound.id });
  }
}
