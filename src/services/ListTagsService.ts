import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepositories"

class LisTagsService {
  async execute() {
    const tagsRepositorys = getCustomRepository(TagsRepository)
    const tags = await tagsRepositorys.find()
    return classToPlain(tags)
  }
}

export { LisTagsService }



// let tags = await tagsRepositorys.find()
//     tags = tags.map(tag=>(
//       {...tag, nameCustom: `#${tag.name}`}
//     ))
