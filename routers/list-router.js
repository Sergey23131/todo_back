const listRouter = require('express').Router();

const listController = require('../controllers/list-controller');

const {checkIDMiddleware} = require('../middlewares/checkIDMiddleware');
const {updateTaskMiddleware} = require('../middlewares/updateTaskMiddleware');
const {createTaskMiddleware} = require('../middlewares/createTaskMiddleware');

listRouter.get('/', listController.getTasks);

listRouter.post('/', createTaskMiddleware, listController.createTask);

listRouter.get('/:task_id', checkIDMiddleware, listController.getTaskById);

listRouter.put('/:task_id', checkIDMiddleware, updateTaskMiddleware, listController.updateTask);

listRouter.delete('/:task_id', checkIDMiddleware, listController.deleteTask);

module.exports = listRouter;
