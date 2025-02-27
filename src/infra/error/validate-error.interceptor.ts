import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, BadRequestException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ValidationErrorInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          const response = error.getResponse();
          if (typeof response === 'object' && 'message' in response) {
            const errorMessages = Array.isArray(response['message']) ? response['message'] : [response['message']];
            throw new BadRequestException(errorMessages[0]);
          }
        }
        return throwError(error);
      }),
    );
  }
}