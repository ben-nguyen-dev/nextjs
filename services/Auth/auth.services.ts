import nonAuthoredRequest from '../nonAuthoredRequest'

class AuthService {
    login = async (payload: any) => {
        return await nonAuthoredRequest.post('/auth/login', payload)
    }
}

const authService = new AuthService()

export default authService
