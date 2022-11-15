export interface IApiResponse<T = any> {
    isSuccess: boolean;
    data: T;
    error?: IApiResponseError;
}

export interface IApiResponseError {
    statusCode: number;
    errorCode: string;
    detailCode: string;
    fields?: IFieldValidationError[];
}

export interface IFieldValidationError {
    name: string;
    errorCode: string;
}

export class ApiResponse<T> implements IApiResponse<T> {
    isSuccess: boolean;
    data: T;
    error: IApiResponseError | undefined;

    constructor(isSuccess: boolean, data: T, error?: IApiResponseError) {
        this.isSuccess = isSuccess;
        this.data = data;
        this.error = error;
    }
}

export class ApiResponseError implements IApiResponseError {
    statusCode: number;
    errorCode: string;
    detailCode: string;
    fields: IFieldValidationError[];

    constructor(statusCode: number, errorCode: string, detailCode: string = '', fields: IFieldValidationError[] = []) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.detailCode = detailCode;
        this.fields = fields;
    }
}