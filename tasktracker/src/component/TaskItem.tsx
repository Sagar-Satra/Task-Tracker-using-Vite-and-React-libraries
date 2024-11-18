import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Task } from '../models/Task';
import { Button, Checkbox, Stack, TextareaAutosize, TextField } from '@mui/material';
import { removeTask, updateTask } from '../services/task-service';

const TaskItem = ({ item, tasks, setTasks}: { item: Task, tasks:Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [task, setTask] = useState<Task>(item);

  // function to save a new task
  async function saveTask(task:Task){
    const status = await updateTask(task);
    if(status === 200){
      setIsEditing(false);
      alert("Task updated.");
      //getTasks().then((res) => setTasks(res))
      const copy = tasks.map(item => item.id === task.id? item = task:item);
      setTasks(copy);
    } else {
        alert("Error While Updating Task!");
    }
  }

  // function to update an existing task
  async function updateTaskHandler(e:React.FormEvent<HTMLFormElement>, task:Task){
    e.preventDefault();
    await saveTask(task);
  }

  // function to delete a task
  async function deleteTask(id:string | undefined){
    if(!id) return;
    console.log(id);
    
    //console.log(temp);
    const status = await removeTask(id);
    if(status === 200){
      alert("Task Deleted.");
      console.log("indise if" , id);
      const temp = tasks.filter((item) => item.id !== id);
      setTasks(temp);

  } else {
      alert("Error While Deleting Task!");
  }
  }

  // function to cancel an edit action
  function cancelEdit(){
    setIsEditing(false);
    setTask(item);
  }

  // function to toggle status of a task
  async function toggleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedTask = { ...task, completed: e.target.checked };
    setTask(updatedTask);
    //console.log(updatedTask); 
    await saveTask(updatedTask);
  }
  return (
    <Card> 
      
      <CardContent>
      <Checkbox onChange={(e) => toggleCheckbox(e)} checked={task.completed}/>
        <Stack spacing={2}>
        {
          isEditing?
          <>
          <form onSubmit={(e) => updateTaskHandler(e,task)}>
          <Stack spacing={2}>
            <TextField required onChange={(e) => {setTask({...task,title:e.target.value})}} value={task.title}/>
            <TextareaAutosize minRows={5} required onChange={(e) => {setTask({...task,description:e.target.value})}} value={task.description}/>
            <Button variant='contained' style={{width : 'max-content'}} type='submit'>Save Edit</Button>
            
            <Button variant='contained' onClick={() => cancelEdit()} style={{width : 'max-content'}} type='button'>Cancel</Button>
          </Stack>
          </form>
          </>:<div onClick={() => setIsEditing(true)}>
            <Typography variant='h4' style={{textDecoration:task.completed? 'line-through': ""}}>
            {task.title}  
            </Typography>
            <Typography noWrap={true} style={{textDecoration:task.completed? 'line-through': "" , fontSize : "1.7rem"}}>
            {task.description}  
            </Typography>
          </div>
        }
        
        <Typography variant="caption" color="textSecondary" component="p">
          {new Date(item.createdDate).toLocaleString()}
        </Typography>
        <Button variant='contained' size='small' style={{width : "max-content" , backgroundColor : "red"}} type='button' onClick={() => deleteTask(task.id)}>Delete</Button>
        </Stack>

      </CardContent>

    </Card>
  );
}

export default TaskItem;
