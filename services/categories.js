const { ErrorObject } = require('../helpers/error')
const { Category } = require('../database/models')

// example of a service
exports.getCategories = async () => {
  try {
    const getCategories = await Category.findAll({
      attributes: ['name'],
    })
    if (!getCategories) {
      throw new ErrorObject('No index found', 404)
    }
    return getCategories
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createCategory = async (name) => {
  try {
    const createCategory = await Category.create(name)
    return createCategory
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
