import { Router } from 'express'
const router = Router()
import * as dogsCtrl from '../controllers/dogs.js'

router.get('/', dogsCtrl.index)

router.get('/new', dogsCtrl.new)

router.get('/vaccines/:dog_id', dogsCtrl.addVaccs)

router.get('/behavior/:dog_id', dogsCtrl.addBehavior)

router.post('/:id/vaccines', dogsCtrl.createVaccsLog)

router.post('/:id/behavior', dogsCtrl.createBehaviorTag)

router.get('/:id', dogsCtrl.show)

router.post('/', dogsCtrl.create)

router.delete('/:id', dogsCtrl.delete)

export {
    router
}