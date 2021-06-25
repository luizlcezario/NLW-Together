import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayloand{
  sub:string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  if (!authToken) {
    return response.status(401).end()
  }
  const [, token] = authToken.split(' ')
  try { 
    const { sub } = verify("698dc19d489c4e4db73e28a713eab07b", token) as IPayloand
    request.user_id = sub
  }
  catch (err) {
    return response.status(401).end()
  }
 
}
