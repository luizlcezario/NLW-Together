import {Router} from 'express'
import { AuthenticateUserController } from './controller/AutehtnticateUserController'
import { CreateComplimentController } from './controller/CreateComplimentController'
import { CreateTagController } from './controller/CreateTagController'
import { CreateUserController } from './controller/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentsCreateController = new CreateComplimentController()
router.post('/users', createUserController.handle)

router.post('/sessions', authenticateUserController.handle)

router.post('/compliments', complimentsCreateController.handle)

router.post('/tags',ensureAdmin,  createTagController.handle)

export { router }
