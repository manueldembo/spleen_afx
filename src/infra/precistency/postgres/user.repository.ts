import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositores/user-repository.interface";
import { prismaClient } from "../prisma.client";
import { Email } from "src/domain/email";

export class UserRepositoryPostgres implements UserRepository {
    async save(user: User): Promise<void> {
        await prismaClient.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email.getValue,
                password: user.password
            }
        })
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prismaClient.user.findUnique({
            where: {
                email
            }
        })

        if (!user)
            return null

        const userEmail = Email.create(email) as Email

        return new User(user.id, user.name, userEmail, user.password)
    }
}