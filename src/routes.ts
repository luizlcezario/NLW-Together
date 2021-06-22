import {Router} from 'express'
import { CreateTagController } from './controller/CreateTagController'
import { CreateUserController } from './controller/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
router.post('/users', createUserController.handle)

router.post('/tags',ensureAdmin,  createTagController.handle)

export { router }
