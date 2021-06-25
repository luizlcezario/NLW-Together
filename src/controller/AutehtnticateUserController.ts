import { Request, Response} from 'express'
import { AuthenticateUserService } from '../services/AuthenticUserServeci'


class AuthenticateUserController {
  async handle(request:Request, response:Response){
    const { email, password}= request.body

    const authenticateUserService = new AuthenticateUserService()
    const token = await authenticateUserService.execute({password,email})

    return response.json(token)
  }
}

export {AuthenticateUserController}
