import { Request, Response} from 'express'
import { LisUsersService } from '../services/ListUserService'


class ListUserController {
  async handle(request:Request, response:Response){

    const createService = new LisUsersService()
    const users = await createService.execute()

    return response.json(users)
  }
}

export {ListUserController}
