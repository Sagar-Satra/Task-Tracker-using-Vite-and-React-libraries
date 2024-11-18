import { Task, TaskSearch } from "../models/Task";
import { create, get, put, remove, search, searchById } from "./api-services";

export const createTask = async (data: Task) => {
    const response = await create(data);
    return response;
};

export const getTasks = async (): Promise<Task[]> => {
    const data = await get<Task>();
    return data;
};

export const updateTask = async (data:Task) => {
    const status = await put(data);
    return status;
};

export const removeTask = async (id:string) => {
    const status = await remove(id);
    return status;
};

export const searchTask = async (data:TaskSearch): Promise<Task[]> => {
    const response = await search<Task>(data);
    return response;
};

export const searchTaskById = async (id:string): Promise<Task> => {
    const response = await searchById<Task>(id);
    return response;
};