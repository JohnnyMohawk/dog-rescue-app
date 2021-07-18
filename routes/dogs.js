import { Router } from 'express'
const router = Router()
import * as dogsCtrl from '../controllers/dogs.js'

router.get('/', dogsCtrl.index)

router.get('/new', dogsCtrl.new)

router.get('/vaccines', dogsCtrl.addVaccs)

router.post('/:id', dogsCtrl.vaccineForm)

router.get('/:id', dogsCtrl.show)

router.post('/', dogsCtrl.create)

router.delete('/:id', dogsCtrl.delete)

export {
    router
}