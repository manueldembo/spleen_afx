export class AppError extends Error {
  public readonly status: number;
  public readonly message: string;

  constructor(message: string, status = 400) {
    super();
    this.status = status;
    this.message = message;
  }
}
