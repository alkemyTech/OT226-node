const express = require('express')
const { get } = require('../controllers/index')
const organizationRouter = require('./organization')
const categoryRouter = require('./categories')
const newsRouter = require('./news')
const userRouter = require('./users')
const authRouter = require('./auth')
const activityRouter = require('./activities')
const contactRouter = require('./contacts')
const slideRouter = require('./slides')
const memberRouter = require('./menbers')

const router = express.Router()

router.get('/', get)

router.use('/organization', organizationRouter)
router.use('/categories', categoryRouter)
router.use('/news', newsRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/activities', activityRouter)
router.use('/contacts', contactRouter)
router.use('/slides', slideRouter)
router.use('/members', memberRouter)

module.exports = router
