export interface ITask {
    title: string;
    id: string;
    completed: boolean;
}

export interface ITodosSlice {
    tasks:ITask[];
}