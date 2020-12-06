// add mongoose
const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required',
        trim: true
    },
    specialties: {
        type: String,
        required: 'Specialties in which field is Required',
        trim: true
    },
    gender: {
        type: String,
        required: 'Gender is Required',
        trim: true
    },
    available: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number
    }
})

//Make the Class Public, Export as a Mongoose Model
module.exports = mongoose.model('Task', taskSchema)