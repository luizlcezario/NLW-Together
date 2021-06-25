import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../repositories/UserRepositorys";
import { getCustomRepository } from "typeorm";


export async function ensureAdmin(request : Request, response: Response , next:NextFunction) {
  const user_id = request.user_id
  const userRepository = getCustomRepository(UsersRepository)

  const { admin } = await userRepository.findOne(user_id) 
  if(admin){
    return next()
  }
  return response.status(401).json({
    error:"Unauthorized"
  })

}
