import {Router} from 'express'
import { ensureAuthenticated } from './middlewares/ensureAutheticated'
import { AuthenticateUserController } from './controller/AutehtnticateUserController'
import { CreateComplimentController } from './controller/CreateComplimentController'
import { CreateTagController } from './controller/CreateTagController'
import { CreateUserController } from './controller/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

import { ListUserSenderCOmplimentsControllar } from './controller/ListUserSenderCOmplimentsControllar'
import { ListUserReceiverCOmplimentsControllar } from './controller/ListUserReceiverCOmplimentsControllar'
import { ListTagsController } from './controller/ListTagsController'
import { ListUserController } from './controller/ListUserController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentsCreateController = new CreateComplimentController()
const listUserSenderComplimentsController = new ListUserSenderCOmplimentsControllar()
const listUserReceiverComplimentsController = new ListUserReceiverCOmplimentsControllar()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()
router.post('/users', createUserController.handle)

router.post('/sessions', authenticateUserController.handle)

router.post('/compliments',ensureAuthenticated, complimentsCreateController.handle)

router.get('/users/compliments/send',ensureAuthenticated, listUserSenderComplimentsController.handle)

router.get('/users/compliments/receiver',ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get('users',ensureAuthenticated, listUserController.handle)
router.get('/tags',ensureAuthenticated, listTagsController.handle)
router.post('/tags',ensureAuthenticated, ensureAdmin,  createTagController.handle)

export { router }
