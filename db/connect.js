const mongoose = require('mongoose')




const connectDB = (url) => {
    return mongoose.connect(url, { // db error synatx
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    // .then(() =>console.log('CONNECTEDTED TO THE DB....'))
    // .catch((err) => console.log(err)) 
     
}

module.exports =connectDB
     