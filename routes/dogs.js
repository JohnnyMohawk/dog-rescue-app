import { Router } from 'express'
import * as dogsCtrl from '../controllers/dogs.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
    router
}

const router = Router()

router.get('/', dogsCtrl.index)

router.get('/new', isLoggedIn, dogsCtrl.new)

router.get('/vaccines/:dog_id', isLoggedIn, dogsCtrl.addVaccs)

router.get('/behavior/:dog_id', isLoggedIn, dogsCtrl.addBehavior)

router.post('/:id/vaccines', isLoggedIn, dogsCtrl.createVaccsLog)

router.post('/:id/behavior', isLoggedIn, dogsCtrl.createBehaviorTag)

router.get('/:id', dogsCtrl.show)

router.post('/', isLoggedIn, dogsCtrl.create)

router.delete('/:id', isLoggedIn, dogsCtrl.delete)

