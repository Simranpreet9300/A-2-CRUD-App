/*
 * File name: task.js
 * Author's name: Simranpreet Kaur (200427339)
 * Website name: http://localhost:3000/ and https://a-2-hospital-management.herokuapp.com
 * Description: This is the file that contains the requirement of doctor view.
 */

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