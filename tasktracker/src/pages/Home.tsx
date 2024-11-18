import { Button, Container, Divider, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
//import Task from '../models/Task';
import { createTask, getTasks } from '../services/task-service';
import TaskList from '../component/TaskList';
import SearchTasks from '../component/SearchTasks';
import { Task } from '../models/Task';
import SearchTasksById from '../component/SearchTaskById';

// Initial Home page of the application
const Home = () => {
    const [tasks,setTasks] = useState<Task[]>([]);
    const [data,setData] = useState<Task>({
        title: "New Task",
        description: "New Description",
        createdDate: new Date(),
        completed: false    
    });
// to toggle create task button
    const [isCreating, setIsCreating] = useState<boolean>(false);
    useEffect(() => 
        {getTasks().then((res) => setTasks(res)).catch(() => {setTasks([])})
    },[]);
// callBack functions for creating new task in the dataBase and display it 
    async function handleCreateTask(e:React.FormEvent) {
        e.preventDefault();
        //console.log(data);
        const response = await createTask(data);
        if(response){
            alert("Task Created.");
            setIsCreating(false);
            setData({
                title: "New Task",
                description: "New Description",
                createdDate: new Date(),
                completed: false    
            });
            //console.log(tasks);
            setTasks((prev) => [...prev , response]);
        } else {
            alert("Error While Creating Task!");
        }
    } 
    //console.log(tasks);
    // main component for display all subcomponents of the whole application
  return (
    <Container maxWidth = "lg">
        <Typography variant="h4">
        Task Tracker Application
        </Typography>
        <Stack direction={"column"} spacing={3}>
        <SearchTasks tasks={tasks} setTasks={setTasks}/>
        <SearchTasksById tasks={tasks} setTasks={setTasks}/>
        </Stack>
        <Divider/>
        <Container style={{margin : "10px 5px 5px 0px" }}>
        <Button variant='contained' onClick={() => setIsCreating(!isCreating)}>Create New Task</Button>

        {
            isCreating && <form onSubmit={handleCreateTask}>
            <Stack border={2} borderColor={"gray"} borderRadius={2} padding={2} marginTop={2} spacing={2}>
            <TextField variant='filled' required label='Task Title' value={data.title} onChange={(e) => setData({...data,title:e.target.value})}/>
            <TextareaAutosize minRows={6} required placeholder='Tasks Description' value={data.description} onChange={(e) => setData({...data,description:e.target.value})}/>
            <Button type='submit' variant='contained'>Create</Button>
            </Stack>
            </form>    
        }
        </Container>
        <Divider/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
    
    </Container>
  )
}

export default Home