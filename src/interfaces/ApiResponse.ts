export type SuccessResponse<T> = {
  success: true;
  statusCode: number;
  message: string;
  data: T;
};

export type ErrorResponse = {
  success: false;
  statusCode: number;
  message: string;
  errors?: { field: any; message: any }[];
};

export type IApiResponse<T> = SuccessResponse<T> | ErrorResponse;
