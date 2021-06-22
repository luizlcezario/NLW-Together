import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepositorys"

interface IUserRequest{
  name:string
  email:string
  admin?:boolean
}
class CreateUserService{
  async execute({ name , email , admin}: IUserRequest){
    const usersRepository = getCustomRepository(UsersRepository)
    if(!email){
      throw new Error("Email incorrect")
    }
    const userAlreadyExits = await usersRepository.findOne({email})
    if(userAlreadyExits){
      throw new Error("Users already exits")
    }
    const user = usersRepository.create({
      name, 
      email, 
      admin
    })
    await usersRepository.save(user)

    return user
  }
  

}

export {CreateUserService}
