import axios from 'axios'
import { APP_STORAGE } from '../constants'

export default class DefaultAxios {
    api

    constructor(baseURL: string, contentType?: string) {
        this.api = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': contentType ? contentType : 'application/json',
            },
        })
    }

    setToken = () => {
        const token = localStorage.getItem(APP_STORAGE.ACCESS_TOKEN)
        if (token) {
            this.api.defaults.headers.common.Authorization = `Bearer ${token}`
        }
    }

    get = <T = any>(url = '', config = {}) => {

        this.setToken()
        const getRequest = this.api.get<T>(url, config)
        return getRequest
    }

    post = <T = any>(url = '', body = {}, config = {}) => {
        this.setToken()
        const postRequest = this.api.post<T>(url, body, config)
        return postRequest
    }

    patch = <T = any>(url = '', body = {}, config = {}) => {
        this.setToken()
        const patchRequest = this.api.patch<T>(url, body, config)
        return patchRequest
    }

    put = <T = any>(url = '', body = {}, config = {}) => {
        this.setToken()
        const putRequest = this.api.put<T>(url, body, config)
        return putRequest
    }

    delete = <T = any>(url = '', config = {}) => {
        this.setToken()
        const deleteRequest = this.api.delete<T>(url, config)
        return deleteRequest
    }

    head = <T = any>(url = '', config = {}) => {
        this.setToken()
        const headRequest = this.api.head<T>(url, config)
        return headRequest
    }
}
