

class CustomAPIError extends Error{
    constructor(message, statusCode){
        super(messsage)
        this.statusCode = statusCode
    }
}

const createCustomeError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.export ={ createCustomeError, CustomAPIError}