import { Email } from "src/domain/email";
import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositores/user-repository.interface";

export class FakeUserRepository implements UserRepository {
    private users: User[] = [
        new User('1', 'any_name', Email.create("x@sample.com") as Email, 'any_password')
    ]

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email.getValue === email) || null
    }
}