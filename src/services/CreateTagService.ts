import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepositories"


class CreateTagService{
  async execute(name :string){
    const tagsRepository = getCustomRepository(TagsRepository)
    if(!name){
      throw new Error("Incorrect name!")
    }
    const tagAlreadyExists = await tagsRepository.findOne({name})
    if(tagAlreadyExists){
      throw new Error("Tag already exists")
    }
    const tag = tagsRepository.create({
      name, 
    })
    await tagsRepository.save(tag)

    return tag
  }
  

}

export {CreateTagService}
