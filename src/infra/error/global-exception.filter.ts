import {
  ArgumentsHost,
  Catch,
  ConsoleLogger,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AppError } from 'src/application/errors/app.error';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    private adapterHost: HttpAdapterHost,
    private loggerNativo: ConsoleLogger,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    this.loggerNativo.error(exception);
    console.error(exception);

    const { httpAdapter } = this.adapterHost;

    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    let status = 0;
    let body: any;

    console.log({ exception });
    if (exception instanceof AppError) {
      (status = exception.status),
        (body = {
          statusCode: exception.status,
          message: exception.message,
        });
    }

    if (exception instanceof HttpException) {
      (status = exception.getStatus()), (body = exception.getResponse());
    }

    if (!status) {
      (status = HttpStatus.INTERNAL_SERVER_ERROR),
        (body = {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          timestamp: new Date().toISOString(),
          path: httpAdapter.getRequestUrl(request),
        });
    }

    httpAdapter.reply(response, body, status);
  }
}
