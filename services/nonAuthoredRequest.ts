import DefaultAxios from './defaultAxios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const nonAuthoredRequest = new DefaultAxios(API_URL)

export default nonAuthoredRequest
