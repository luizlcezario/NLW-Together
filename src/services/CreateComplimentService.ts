import { getCustomRepository, getRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { TagsRepository } from "../repositories/TagsRepositories"
import { UsersRepository } from "../repositories/UserRepositorys"

interface IComplimentsRequest{
  tag_id:string
  user_sender:string
  user_receiver:string
  message:string
}

class CreateComplimentsService{
  async execute({ message ,tag_id ,user_receiver ,user_sender} :IComplimentsRequest){
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const userRepositorys = getRepository(UsersRepository)
    const tagsRepository = getRepository(TagsRepository)
    if(user_receiver === user_sender){
      throw new Error("Incorrect User Receiver!")
    }
    const userReciverExists = await userRepositorys.findOne(user_receiver)
 
    if(!userReciverExists){
      throw new Error("Users Receiver does not Exists!")
    }
    const tagsExists = await tagsRepository.findOne(tag_id)
    if(!tagsExists){
      throw new Error("This Tag does not Exists!")
    }
    const compliment = complimentsRepository.create({
      message ,
      tag_id ,
      user_receiver ,
      user_sender
    })

    await complimentsRepository.save(compliment)

    return compliment
    
  }
  

}

export {CreateComplimentsService}
