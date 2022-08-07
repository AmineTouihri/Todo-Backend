const router=require('express').Router()
const {getAllTasks,CreateNewTask,UpdateTask,DelteTask,getOneTask}=require('../controllers/task')

router.route('/:id').patch(UpdateTask).delete(DelteTask).get(getOneTask)
router.route('/').get(getAllTasks).post(CreateNewTask)


module.exports=router