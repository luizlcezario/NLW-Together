import 'reflect-metadata'
import express, { Response, Request, NextFunction } from 'express'
import './database'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
const app = express()
app.use(cors())

app.use(express.json())
app.use(router)

app.use((err: Error , request: Request, response : Response, next : NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error:err.message
    })
  }
  return response.status(500).json({
    status:"error",
    message: "Internal Server Error"
  })
})
app.listen(3000, () => console.log('server is run'))


// desafio dia1 #together
// desafio dia2 #unidade
// desafio dia3 #embuscadeevolução
// desafio dia4 #legacy
// desafio dia5 juntos no próximo nível
