import { Task, TaskSearch } from "../models/Task"

const serverURL = 'http://localhost:3000'

export const create = async (data: Task) => {
    const response = await fetch(`${serverURL}/tasks`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(data)
    });
    return response.json();
}; 

export const get = async <T> (): Promise<T[]> => {
    const response = await fetch(`${serverURL}/tasks`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json' 
        },
    });
    if(!response.ok){
        throw new Error("Error fetching data");
    }
    return response.json();
}; 

export const put = async (data: Task) => {
    const response = await fetch(`${serverURL}/tasks/${data.id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(data)
    });
    return response.status;
}; 

export const remove = async (id: string) => {
    const response = await fetch(`${serverURL}/tasks/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json' 
        },
    });
    return response.status;
};

export const search = async <T> (data:TaskSearch): Promise<T[]> => {
    const params = new URLSearchParams();
    for (const key in data) {
        const value = data[key as keyof TaskSearch];
        
        if (value !== undefined) {
          if (typeof value === 'string' && value.trim() !== '') {
            params.append(key, value);
          } else if (value instanceof Date) {
            // Format Date to ISO string or any preferred format
            params.append(key, value.toISOString());
          } else if (typeof value === 'boolean') {
            // Convert boolean to string ('true' or 'false')
            params.append(key, value.toString());
          }
        }
      }
    const response = await fetch(`${serverURL}/tasks/filter?${params.toString()}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json' 
        },
    });
    
    if(!response.ok){
        throw new Error("Failed filtering data");
    }

    return response.json();
};

export const searchById = async <T> (id : string): Promise<T> => {
    const response = await fetch(`${serverURL}/tasks/${id}`,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json' 
        },
    });
    
    if(!response.ok){
        throw new Error("Failed getting data");
    }

    return response.json();
};