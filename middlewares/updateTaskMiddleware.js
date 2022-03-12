const updateValidator = require('../validators/updateTask_validator');

const {errors_massage, errors_code, ErrorHandler} = require('../errors');

module.exports = {
    updateTaskMiddleware: (req, res, next) => {
        try {

            const {error, value} = updateValidator.updateTaskValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(errors_massage.NOT_VALID_BODY, errors_code.NOT_VALID);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
