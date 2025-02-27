import { Email } from "src/domain/email"
import { UserRepository } from "src/domain/repositores/user-repository.interface"
import { Inject, Injectable } from "@nestjs/common"
import { Encrypter } from "../ports/encrypter.interface"
import { User } from "src/domain/entities/user"
import { BadRequestError } from "src/application/helpers/http.helper"

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject("UserRepository")
        private readonly userRepository: UserRepository,
        @Inject("Encrypter")
        private readonly encrypter: Encrypter
    ) {}
    
    async execute(name: string, email: string, password: string): Promise<void> {
        const emailOrError = Email.create(email)        
        if (emailOrError instanceof Error)
            throw BadRequestError(emailOrError.message)

        const hashedPassword = await this.encrypter.encrypt(password, 10)

        const emailExists = await this.userRepository.findByEmail(email)
        if (emailExists)
            throw BadRequestError("Email is already in use")

        const user = new User(null, name, emailOrError, hashedPassword)
        await this.userRepository.save(user)
    }
}  