import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepositorys"

interface IAuthenticateUserRequest{
  
  email:string
  password:string
}
class AuthenticateUserService{
  async execute({  email , password}: IAuthenticateUserRequest){
    const usersRepository = getCustomRepository(UsersRepository)
    if(!email || !password){
      throw new Error("Email/Password incorrect!")
    }
    const user = await usersRepository.findOne({email})
    if(user){
      throw new Error("Email/Password incorrect!")
    }

    const passwordCompare = await compare(password, user.password)
    if(passwordCompare === false){
      throw new Error("Email/Password incorrect!")
    }
    const token = sign({email:user.email}, "698dc19d489c4e4db73e28a713eab07b",{
      subject:user.id,
      expiresIn:"1d"
    })

    return token
  }


  

}

export {AuthenticateUserService}
