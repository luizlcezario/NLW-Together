import { Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
  async handle(request:Request, response:Response){
    const {name, email,admin , password}= request.body

    const createService = new CreateUserService()
    const user = await createService.execute({name,password,email,admin})

    return response.json(user)
  }
}

export {CreateUserController}
