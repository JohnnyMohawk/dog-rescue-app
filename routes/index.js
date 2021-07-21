import { Router } from 'express'

export {
  router
}

const router = Router()

router.get('/', function(req, res, next) {
  res.redirect('/dogs')
})
