import DefaultAxios from './defaultAxios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const authoredRequest = new DefaultAxios(API_URL)
authoredRequest.setToken()

export default authoredRequest
