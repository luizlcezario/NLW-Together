import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepositorys"

class LisUsersService {
  async execute() {
    const userRepositorys = getCustomRepository(UsersRepository)
    const user = await userRepositorys.find()
    return classToPlain(user)
  }
}

export { LisUsersService }




