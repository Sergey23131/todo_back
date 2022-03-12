const List = require('../database/List');

const {errors_code} = require('../errors');

module.exports = {
    getTasks: async (req, res, next) => {
        try {
            const allTasks = await List.find();

            res.status(errors_code.UPDATE_DATA).json(allTasks);
        } catch (e) {
            next(e);
        }
    },

    getTaskById: async (req, res, next) => {
        try {
            const {task_id} = req.params;

            const oneTask = await List.findById(task_id);

            res.status(errors_code.UPDATE_DATA).json(oneTask);
        } catch (e) {
            next(e);
        }
    },

    updateTask: async (req, res, next) => {
        try {
            const {task_id} = req.params;

            await List.findByIdAndUpdate(task_id, {...req.body});

            res.status(errors_code.UPDATE_DATA).json('You update task');
        } catch (e) {
            next(e);
        }
    },

    createTask: async (req, res, next) => {
        try {

            await List.createTask({...req.body});

            res.status(errors_code.UPDATE_DATA).json('You create new task!');
        } catch (e) {
            next(e);
        }
    },

    deleteTask: async (req, res, next) => {
        try {
            const {task_id} = req.params;

            await List.findByIdAndRemove(task_id);

            res.status(errors_code.UPDATE_DATA).json('Task was removed!');
        } catch (e) {
            next(e);
        }
    }
};
