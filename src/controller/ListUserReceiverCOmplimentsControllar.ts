import { Request, Response} from 'express'
import { ListUserReciverComplimentsService } from '../services/ListUserReciverComplimentsService'

class ListUserReceiverCOmplimentsControllar {
  async handle(request:Request, response:Response){
    const user_id = request.user_id

    const createService = new ListUserReciverComplimentsService()
    const compliments = await createService.execute(user_id)

    return response.json(compliments)
  }
}

export {ListUserReceiverCOmplimentsControllar}
