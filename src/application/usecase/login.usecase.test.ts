import { describe, test } from "vitest";
import { UnauthorizedError } from "../helpers/http.helper";
import { LoginUsecase } from "./login.usecase";

describe('LoginUsecase', () => {
    test('Should return unauthorized if email is not found', async () => {
        const sut = new LoginUsecase()

        await expect(sut.execute('unauthorized-email')).rejects.toThrow(UnauthorizedError('Unauthorized user'))
    })

})