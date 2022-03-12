const {Schema, model} = require('mongoose');
const taskPreparations = require('../configs/taskPreparations');


const listSchema = new Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    readiness: {
        type: String,
        default: taskPreparations.FALSE,
        enum: Object.values(taskPreparations)
    },

}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});


listSchema.statics = {
    createTask(taskObject) {
        return this.create({...taskObject});
    },

};


module.exports = model('list', listSchema);
