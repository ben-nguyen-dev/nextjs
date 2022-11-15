import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ENV_CONFIG } from '../configs';
import { ApiResponse, ApiResponseError, IApiResponse } from '../models/IApiResponse';
import { APP_STORAGE } from '../constants';

class HttpClient {
    httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: ENV_CONFIG.REACT_APP_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Add a request interceptor
        this.httpClient.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem(APP_STORAGE.ACCESS_TOKEN);
                if (token) {
                    config.headers = {
                        ...config.headers,
                        authorization: `Bearer ${token}`,
                    };
                }
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );

        // Add a response interceptor
        this.httpClient.interceptors.response.use(
            (response) => {
                return new ApiResponse(true, response.data);
            },
            (error) => {
                let apiError;
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const { status, data } = error.response;
                    apiError = new ApiResponseError(status, data?.message, data?.fields);
                } else if (error.request) {
                    // The request was made but no response was received
                    apiError = new ApiResponseError(503, error.message); // 503: Service Unavailable
                } else {
                    // Something happened in setting up the request that triggered an Error
                    apiError = new ApiResponseError(0, error.message);
                }
                return new ApiResponse(false, null, apiError);
            }
        );
    }

    get = <T = any>(url = '', config?: AxiosRequestConfig) => this.httpClient.get<T, IApiResponse<T>>(url, config);

    delete = <T = any>(url = '', config?: AxiosRequestConfig) =>
        this.httpClient.delete<T, IApiResponse<T>>(url, config);

    post = <T = any>(url = '', data?: any, config?: AxiosRequestConfig) =>
        this.httpClient.post<T, IApiResponse<T>>(url, data, config);

    put = <T = any>(url = '', data?: any, config?: AxiosRequestConfig) =>
        this.httpClient.put<T, IApiResponse<T>>(url, data, config);

    patch = <T = any>(url = '', data?: any, config?: AxiosRequestConfig) =>
        this.httpClient.patch<T, IApiResponse<T>>(url, data, config);
}

const httpClient = new HttpClient();
export default httpClient;
