import { UserRepository } from "src/domain/repositores/user-repository.interface";
import { UnauthorizedError } from "../helpers/http.helper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginUsecase {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(email: string, password: string) {
        const userFound = await this.userRepository.findByEmail(email)
        if(!userFound)
            throw UnauthorizedError('Unauthorized user')

        const passwordValid = userFound.verifyPassword(password)
        if(!passwordValid)
            throw UnauthorizedError('Invalid credentials')
    }
}