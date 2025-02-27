import { describe, test } from 'vitest'
import { CreateUserUseCase } from './create-user.usecase'

describe('Create user', () => {
    test('Should return a bad request if name is not set', async () => {
        const sut = new CreateUserUseCase()

        const err = await sut.execute("", "email@sample.com", "password") as Error

        expect(err.message).toBe("Name is required")
    })

    test('Should return a bad request if email is not valid', async () => {
        const sut = new CreateUserUseCase()

        const err = await sut.execute("John Doe", "invalid-email", "password") as Error        

        expect(err.message).toBe("Invalid email")
    })

    test('Should return an error if passwor is not set', async () => {
        const sut = new CreateUserUseCase()

        const err = await sut.execute("John Doe", "email@sample.com", "") as Error        

        expect(err.message).toBe("Password is required")
    })
})