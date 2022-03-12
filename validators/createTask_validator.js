const Joi = require('joi');
const taskPreparations = require('../configs/taskPreparations');

const createTaskValidator = Joi.object({
    task: Joi
        .string()
        .min(5)
        .max(255)
        .trim()
        .required(),
    readiness: Joi
        .string()
        .allow(...Object.values(taskPreparations)),

});

module.exports = {
    createTaskValidator
};
