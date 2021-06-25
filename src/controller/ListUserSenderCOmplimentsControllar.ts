
import { Request, Response} from 'express'

import { ListUserSenderComplimentsService } from '../services/ListUserSenderComplimentsService'

class ListUserSenderCOmplimentsControllar {
  async handle(request:Request, response:Response){
    const user_id = request.user_id

    const createService = new ListUserSenderComplimentsService()
    const compliments = await createService.execute(user_id)

    return response.json(compliments)
  }
}

export {ListUserSenderCOmplimentsControllar}
