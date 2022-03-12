const List = require('../database/List');

const {ErrorHandler, errors_massage, errors_code} = require('../errors');


module.exports = {
    checkIDMiddleware: async (req, res, next) => {
        try {
            const {task_id} = req.params;

            const oneTask = await List.findById(task_id);

            if (!oneTask) {
                throw new ErrorHandler(errors_massage.NOT_FOUND_BY_ID, errors_code.NOT_FOUND);
            }

            req.task = oneTask;

            next();
        } catch (e) {
            next(e);
        }
    }
};
