import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositores/user-repository.interface";

export class FakeUserRepository implements UserRepository {
    private users: User[] = []

    async save(user: User): Promise<void | Error> {
        this.users.push(user)
    }
}