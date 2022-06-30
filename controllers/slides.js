const createHttpError = require('http-errors')
const { getSlides, createSlider } = require('../services/slides')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')
const { uploadImage } = require('../services/aws')
const { enCode64 } = require('../helpers/enCode64')
// const { base64Encode } = require('../helpers/64encode')

// example of a controller. First call the service, then build the controller method
module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getSlides()
      endpointResponse({
        res,
        message: 'slides retrieved successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      const { order, text, organizationId } = req.body
      const finalImg = enCode64(req.file)
      const uploadedImageRoute = await uploadImage(finalImg, false)

      const slides = {
        imageUrl: uploadedImageRoute,
        order,
        text,
        organizationId,
      }
      const response = await createSlider(slides)
      endpointResponse({
        res,
        message: 'Slides created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Slides created] - [slides - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
