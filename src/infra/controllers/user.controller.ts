import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/application/dto/user.dto";
import { CreateUserUseCase } from "src/application/usecase/create-user.usecase";

@Controller('users')
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post()
    async create(@Body() input: CreateUserDTO) {
        await this.createUserUseCase.execute(input.name, input.email, input.password)
    }
}