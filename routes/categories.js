const express = require('express')
const schemaValidator = require('../middlewares/validator')
const { get, post } = require('../controllers/categories')
const { category } = require('../schemas/category')

const router = express.Router()

router.get('/', get)
router.post('/', schemaValidator(category), post)

module.exports = router
