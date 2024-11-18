export interface Task{
    title: string,
    description: string,
    createdDate: Date,
    completed: boolean,
    id?: string
}

export interface TaskSearch{
    title?: string,
    description?: string,
    startDate?: Date,
    endDate?: Date,
    completed?: boolean
    id?: string
}
