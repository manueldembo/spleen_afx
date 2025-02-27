import { describe, test } from "vitest";
import { UnauthorizedError } from "../helpers/http.helper";
import { LoginUsecase } from "./login.usecase";
import { UserRepository } from "src/domain/repositores/user-repository.interface";
import { FakeUserRepository } from "test/fake-user.repository";
import { BcryptAdapter } from "src/infra/bcrypt-adapter";

describe('LoginUsecase', () => {
     let userRepository: UserRepository
        let sut: LoginUsecase
    
        beforeEach(() => {
            userRepository = new FakeUserRepository()
            sut = new LoginUsecase(userRepository)
        })

    test('Should return unauthorized if email is not found', async () => {
        await expect(sut.execute('unauthorized-email', "password")).rejects.toThrow(UnauthorizedError('Unauthorized user'))
    })

    test('Should return unauthorized if password is incorrect', async () => {
        await expect(sut.execute('x@sample.com', "password")).rejects.toThrow(UnauthorizedError('Invalid credentials'))
    })

})