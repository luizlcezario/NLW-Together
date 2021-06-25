import { Request, Response} from 'express'
import { LisTagsService } from '../services/ListTagsService'

class ListTagsController {
  async handle(request:Request, response:Response){

    const createService = new LisTagsService()
    const tags = await createService.execute()

    return response.json(tags)
  }
}

export {ListTagsController}
