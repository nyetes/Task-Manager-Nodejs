const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')
const {createCustomeError} = require('../error/custom-error')


const getAllTasks = asyncWrapper(async (req, res) => {
    // try {
    //     const tasks = await Task.find({})
    //     res.status(200).json({tasks})
    //     // res.status(200).json({tasks, anmount:tasks.lenght})
    //     // res
    //     // .status(200)
    //     // .json({sucess: "sucess", data:{tasks,nbHits: tasks.lenght}})
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const createTask = asyncWrapper( async (req, res) => {
    // try {
    //     const task = await Task.create(req.body)
    // res.status(201).json({task})
        
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
})

const getTask = asyncWrapper( async (req, res) => {
    // try {
        const {id: taskID} = req.params
        const task = await Task.findOne({ _id: taskID});

        if (!task) {
            return next(createCustomeError(`No task with id : ${taskID}`,404))
            // return res.status(404).json({msg:`No task with id : ${taskID}`})
        }

        res.status(200).json({task})
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
})

const deleteTask = asyncWrapper( async (req, res) => {
    // try {
        const {id: taskID} = req.params; 
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return next(createCustomeError(`No task with id : ${taskID}`,404))
        }
        res.status(200).json({task})
        // res.starus(200).send()
        // res.status(200).json({task: null, status: 'sucess'})
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
    res.send('delete task')
})

const updateTask = asyncWrapper( async (req, res, next) => {
    // try {
        const {id: taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new: true,
            runValidators: true,
        })

        if (!task) {
            // const error = new Error('Not Found')
            // error.status =  404
            // return next(error)
            return next(createCustomeError(`No task with id : ${taskID}`,404))
        }


        res.status(200).json({task})
    // } catch (error) {
    //     res.status(500).json({msg: error})
    // }
    
})




module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
   
}