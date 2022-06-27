const express = require('express')
const { schemaValidator } = require('../middlewares/validator')
const { category } = require('../schemas/category')
const {
  get, getCategoryById, post, destroy,
} = require('../controllers/categories')

const router = express.Router()

router.get('/:id', getCategoryById)
router.get('/', get)
router.post('/', schemaValidator(category), post)
router.delete('/:id', destroy)

module.exports = router
