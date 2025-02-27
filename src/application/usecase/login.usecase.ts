import { UnauthorizedError } from "../helpers/http.helper";

export class LoginUsecase {
    async execute(email: string) {
        throw UnauthorizedError('Unauthorized user')
    }
}