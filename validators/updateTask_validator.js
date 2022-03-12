const Joi = require('joi');
const taskPreparations = require('../configs/taskPreparations');

const updateTaskValidator = Joi.object({
    task: Joi
        .string()
        .min(5)
        .max(255)
        .trim(),
    readiness: Joi
        .string()
        .allow(...Object.values(taskPreparations)),

});

module.exports = {
    updateTaskValidator
};
