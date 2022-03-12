const createValidator = require('../validators/createTask_validator');

const {errors_massage, errors_code, ErrorHandler} = require('../errors');

module.exports = {
    createTaskMiddleware: (req, res, next) => {
        try {

            const {error, value} = createValidator.createTaskValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errors_massage.NOT_VALID_BODY, errors_code.NOT_VALID);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
