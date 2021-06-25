import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepositorys"

interface IUserRequest{
  name:string
  email:string
  password:string
  admin?:boolean
}
class CreateUserService{
  async execute({ name , email , admin = false, password}: IUserRequest){
    const usersRepository = getCustomRepository(UsersRepository)
    if(!email){
      throw new Error("Email incorrect")
    }
    const userAlreadyExits = await usersRepository.findOne({email})
    if(userAlreadyExits){
      throw new Error("Users already exits")
    }
    const passwordHashed = await hash(password , 8)

    const user = usersRepository.create({
      name, 
      email, 
      password: passwordHashed,
      admin
    })
    await usersRepository.save(user)

    return user
  }
  

}

export {CreateUserService}
