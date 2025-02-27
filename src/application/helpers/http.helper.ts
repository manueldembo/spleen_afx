import { AppError } from "src/application/errors/app.error";

export const BadRequestError = (message: string) => new AppError(message, 400)