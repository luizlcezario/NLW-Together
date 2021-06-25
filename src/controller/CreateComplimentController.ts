import { Request, Response} from 'express'
import { CreateComplimentsService } from '../services/CreateComplimentService'
import { CreateTagService } from '../services/CreateTagService'


class CreateComplimentController {
  async handle(request:Request, response:Response){
    const {message ,tag_id ,user_receiver ,user_sender}= request.body

    const createService = new CreateComplimentsService()
    const compliment = await createService.execute({message , tag_id ,user_receiver ,user_sender})

    return response.json(compliment)
  }
}

export {CreateComplimentController}
