import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserReciverComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentsRepository)
    const compliments = await complimentRepository.find
      ({
        where: { user_receiver: user_id },
        relations: ["userSender", "userReceiver", "tag"]
      })
    return compliments
  }
}

export { ListUserReciverComplimentsService }
