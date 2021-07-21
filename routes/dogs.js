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

router.get('/adoption/:dog_id', isLoggedIn, dogsCtrl.procAdoption)

router.get('/transfer/:dog_id', isLoggedIn, dogsCtrl.procTransfer)

router.post('/:id/vaccines', isLoggedIn, dogsCtrl.createVaccsLog)

router.post('/:id/behavior', isLoggedIn, dogsCtrl.createBehaviorTag)

router.post('/:id/adoption', isLoggedIn, dogsCtrl.createAdoptionTag)

router.get('/:id', dogsCtrl.show)

router.post('/', isLoggedIn, dogsCtrl.create)

router.delete('/:id', isLoggedIn, dogsCtrl.delete)

