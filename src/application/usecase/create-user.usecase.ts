export class CreateUserUseCase {
    execute(): Error {
        return new Error("Name is required")
    }
}  