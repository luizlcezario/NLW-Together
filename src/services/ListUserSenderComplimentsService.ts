import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserSenderComplimentsService{
  async execute(user_id:string){
    const complimentRepository = getCustomRepository(ComplimentsRepository)
    const compliments = await complimentRepository.find({where:{user:user_id}})
    return compliments
  }
}

export {ListUserSenderComplimentsService}
