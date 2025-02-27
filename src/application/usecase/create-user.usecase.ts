import { Email } from "src/domain/email"

export class CreateUserUseCase {
    async execute(name: string, email: string, password: string): Promise<void | Error> {
        if (name === "")
            return new Error("Name is required")

        if (password === "")
            return new Error("Password is required")

        const emailOrError = Email.create(email)        
        if (emailOrError instanceof Error)
            return emailOrError
    }
}  