import { Button, Checkbox, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Task, TaskSearch } from '../models/Task';
import { searchTask } from '../services/task-service';
import "./SearchTasks.css"

const SearchTasks = ({tasks,setTasks}: {tasks:Task[], setTasks:React.Dispatch<React.SetStateAction<Task[]>>}) => {
  const [search, setSearch] = useState<TaskSearch>({
    completed: false
  });
  const [isSearching , setIsSearching] = useState<boolean>(false);
  
// function to search Tasks as per the input parameters passed
  async function searchHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (!search){
      return;
    }
    searchTask(search).then((response) => {setTasks(response)}).catch(() => setTasks([])); 
    setSearch({completed : false});
  }

  // Helper function to format date to YYYY-MM-DD
  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  }

  return (
        <Container style={{margin : "10px 5px 5px 0px" }}>

    <Button variant='contained' onClick={() => setIsSearching(!isSearching)} style={{backgroundColor : "darkorchid"}}>Search Task</Button>
    {
      isSearching &&
        <form style={{margin : "10px 0px"}} onSubmit={(e) => searchHandler(e)}>
          <Stack border={2} borderColor={"gray"} justifyContent={"space-between"} borderRadius={2} padding={2} marginTop={2} flexBasis={1} flexWrap={"wrap"} direction={"row"} spacing={2}>
          <TextField 
            value={search?.title || ''} 
            onChange={e => {setSearch({...search, title: e.target.value})}} 
            placeholder='Search By Title'
          />
          <TextField 
            value={search?.description || ''} 
            onChange={e => {setSearch({...search, description: e.target.value})}} 
            placeholder='Search By Description'
          />
          <label>
            <Typography variant='body2'>Completed</Typography>
          <Checkbox 
            checked={search?.completed} 
            onChange={e => {setSearch({...search, completed: e.target.checked})}} 
          />
          </label>
          <label>
            <Typography variant='body2'>Start Date</Typography>
          <input 
            className='date-input'
            value={formatDate(search?.startDate)} 
            onChange={e => {setSearch({...search, startDate: new Date(e.target.value)})}} 
            type='date'
          />
          </label>
          <label>
          <Typography variant='body2'>End Date</Typography>
          <input 
            className='date-input'
            value={formatDate(search?.endDate)} 
            onChange={e => {setSearch({...search, endDate: new Date(e.target.value)})}} 
            type='date'
          />
          </label>
          <Button type='submit' variant='contained' style={{backgroundColor : "#00AB66"}} >Search</Button>
    </Stack> 
        </form>
    }
    </Container>  
  )
}

export default SearchTasks
