const { Router } = require('express')
const userRouter = require('./users.router.js')
const cartsRouter = require('./carts.router.js')
const productsRouter = require('./products.router.js')
const viewsRouter = require('./views.router.js')
const messagesRouter = require('./messages.router.js')


const router = Router()




router.use('/', viewsRouter)
router.use('/api/users', userRouter)
router.use('api/carts', cartsRouter)
router.use('/api/products', productsRouter)
router.use('/api/message', messagesRouter)



module.exports = router
