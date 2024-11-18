import React from 'react'
import { Task } from '../models/Task'
import TaskItem from './TaskItem';
import { Stack } from '@mui/material';

const TaskList = ({tasks , setTasks}  : {tasks:Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>}) => {
    
    return (
        <Stack margin={3} border={2} bgcolor={"lightblue"} borderColor={"gray"} borderRadius={2} padding={2} marginTop={2} spacing={5}>
            
            {
                tasks.length > 0 && tasks.map((item) => {
                    return <TaskItem item={item} setTasks={setTasks} tasks={tasks} key={item.id}/>
            })
            }

        </Stack>
    );
    
}


export default TaskList

