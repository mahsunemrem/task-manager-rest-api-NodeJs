const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    description: {
        type : String,
        trim:true,
        required: true

    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps : true
})

taskSchema.pre('save', async function (next)  {
    const task = this

    console.log('updated')

    next()
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task