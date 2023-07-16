const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log('Connection Success')
}).catch(() => {
    console.log('Connection Denied')
})

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});


const User = mongoose.model('User', userSchema)

module.exports = User