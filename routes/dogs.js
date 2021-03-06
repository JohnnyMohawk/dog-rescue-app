import { Router } from 'express'
import * as dogsCtrl from '../controllers/dogs.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
    router
}

const router = Router()

router.get('/', dogsCtrl.index)

router.get('/home', dogsCtrl.home)

router.get('/notadoptable', dogsCtrl.notReadyIndex)

router.get('/adopted', dogsCtrl.adoptedIndex)

router.get('/transferred', dogsCtrl.transferredIndex)

router.get('/my-intake-history', dogsCtrl.myIntakeIndex)

router.get('/new', isLoggedIn, dogsCtrl.new)

router.get('/vaccines/:dog_id', isLoggedIn, dogsCtrl.addVaccs)

router.get('/vaccines/:dog_id/update', isLoggedIn, dogsCtrl.addUpdateVaccs)

router.get('/behavior/:dog_id', isLoggedIn, dogsCtrl.addBehavior)

router.get('/behavior/:dog_id/update', isLoggedIn, dogsCtrl.addUpdateBehavior)

router.get('/adoption/:dog_id', isLoggedIn, dogsCtrl.procAdoption)

router.get('/transfer/:dog_id', isLoggedIn, dogsCtrl.procTransfer)

router.post('/:id/vaccines', isLoggedIn, dogsCtrl.createVaccsLog)

router.put('/:id/vaccines', isLoggedIn, dogsCtrl.updateVaccs)

router.post('/:id/behavior', isLoggedIn, dogsCtrl.createBehaviorTag)

router.put('/:id/behavior', isLoggedIn, dogsCtrl.updateBehavior)

router.post('/:id/adoption', isLoggedIn, dogsCtrl.createAdoptionTag)

router.post('/:id/transfer', isLoggedIn, dogsCtrl.createTransferTag)

router.get('/:id', dogsCtrl.show)

router.post('/', isLoggedIn, dogsCtrl.create)

router.put("/:id/flip-adoptable", isLoggedIn, dogsCtrl.flipAdoptable)

router.delete('/:id', isLoggedIn, dogsCtrl.delete)

