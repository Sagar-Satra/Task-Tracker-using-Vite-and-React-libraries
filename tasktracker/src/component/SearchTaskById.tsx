import { Button, Container, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Task } from '../models/Task';
import { searchTaskById } from '../services/task-service';
import "./SearchTasks.css"

const SearchTasksById = ({tasks,setTasks}: {tasks:Task[], setTasks:React.Dispatch<React.SetStateAction<Task[]>>}) => {
  const [search, setSearch] = useState<string>();
  const [isSearching , setIsSearching] = useState<boolean>(false);
// function to fetch a single task by ID
  async function searchHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    
    if (!search || search.trim() === ""){
        return;
    }
    searchTaskById(search).then((response) => {setTasks([response])}).catch(() => setTasks([]));
    setSearch(""); 
  }

// component for displaying the search field for SearchTaskByID
  return (
    <Container style={{margin : "10px 5px 5px 0px" }}>

    <Button variant='contained' onClick={() => setIsSearching(!isSearching)} style={{backgroundColor : "#007FFF"}}>Search Task By Id</Button>
    {
      isSearching &&
        <form style={{margin : "10px 0px"}} onSubmit={(e) => searchHandler(e)}>
            <Stack border={2} borderColor={"gray"} justifyContent={"space-between"} borderRadius={2} padding={2} marginTop={2} flexBasis={1} flexWrap={"wrap"} direction={"row"} spacing={5}>
            
            <TextField 
                value={search || ''} 
                onChange={e => setSearch(e.target.value)} 
                placeholder='Search By Id'
                required
                style={{ width: '350px'}}
            />
            <Button type='submit' variant='contained' style={{backgroundColor : "#00AB66"}} >Search</Button>
            </Stack> 
        </form>
    }
    </Container>  
  )
}

export default SearchTasksById
