export interface ListResult<T> {
  page: number;
  perPage: number;
  total: number;
  data: T[];
}
