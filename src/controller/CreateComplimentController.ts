import { Request, Response} from 'express'
import { CreateComplimentsService } from '../services/CreateComplimentService'
import { CreateTagService } from '../services/CreateTagService'


class CreateComplimentController {
  async handle(request:Request, response:Response){
    const {message ,tag_id ,user_receiver }= request.body
    const user_sender =  request.user_id

    const createService = new CreateComplimentsService()
    const compliment = await createService.execute({message , tag_id ,user_receiver ,user_sender})

    return response.json(compliment)
  }
}

export {CreateComplimentController}
