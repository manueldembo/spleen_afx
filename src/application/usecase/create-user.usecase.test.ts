import { describe, test } from 'vitest'
import { CreateUserUseCase } from './create-user.usecase'

describe('Create user', () => {
    test('Should return a bad request if name is not set', () => {
        const sut = new CreateUserUseCase()

        const err = sut.execute()

        expect(err.message).toBe("Name is required")
    })
})