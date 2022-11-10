const {CustomAPIError} = require('../error/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    // console.log(err)
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.meassage})
    }
    return res.status(500).json({msg: 'Something went wrong, try again'})
}


module.exports = errorHandlerMiddleware