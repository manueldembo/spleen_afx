import { describe, test } from 'vitest'
import { CreateUserUseCase } from './create-user.usecase'
import { UserRepository } from 'src/domain/repositores/user-repository.interface'
import { FakeUserRepository } from 'test/fake-user-repository.interface'
import { BcryptAdapter } from 'src/infra/bcrypt-adapter'
import { Encrypter } from '../ports/encrypter.interface'

describe('Create user', () => {
    let userRepository: UserRepository
    let encrypter: Encrypter
    let sut: CreateUserUseCase

    beforeEach(() => {
        userRepository = new FakeUserRepository()
        encrypter = new BcryptAdapter(12)
        sut = new CreateUserUseCase(userRepository, encrypter)
    })

    test('Should return a bad request if name is not set', async () => {
        const err = await sut.execute("", "email@sample.com", "password") as Error

        expect(err.message).toBe("Name is required")
    })

    test('Should return a bad request if email is not valid', async () => {
        const err = await sut.execute("John Doe", "invalid-email", "password") as Error        

        expect(err.message).toBe("Invalid email")
    })

    test('Should return an error if passwor is not set', async () => {
        const err = await sut.execute("John Doe", "email@sample.com", "") as Error        

        expect(err.message).toBe("Password is required")
    })

    test('Should create a user', async () => {
        const result = await sut.execute("John Doe", "email@sample.com", "password")

        expect(result).toBeUndefined()
    })
})