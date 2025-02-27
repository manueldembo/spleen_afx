import { AppError } from 'src/application/errors/app.error';

export const BadRequestError = (message: string) => new AppError(message, 400);

export const UnauthorizedError = (message: string) =>
  new AppError(message, 401);

export const NotFoundError = (message: string) => new AppError(message, 404);
