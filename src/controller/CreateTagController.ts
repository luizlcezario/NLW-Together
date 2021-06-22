import { Request, Response} from 'express'
import { CreateTagService } from '../services/CreateTagService'


class CreateTagController {
  async handle(request:Request, response:Response){
    const {name}= request.body

    const createService = new CreateTagService()
    const tag = await createService.execute(name)

    return response.json(tag)
  }
}

export {CreateTagController}
