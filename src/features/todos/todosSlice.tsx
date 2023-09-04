import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask, ITodosSlice} from "./types";


export const initialState: ITodosSlice = {
    tasks: []
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.tasks = [...state.tasks, action.payload];
        },
        toggleCompleteTasks(state, action: PayloadAction<string>) {
            return {
                ...state,
                tasks: state.tasks.map(
                    task => task.id === action.payload
                        ? {
                            ...task,
                            completed: !task.completed
                        }
                        : task
                ),
            }
        },
        deleteCompleteTasks(state, action: PayloadAction<boolean>) {
            state.tasks = state.tasks.filter(
                (task) => task.completed !== action.payload);
        }
    }
});

export const {addTask, toggleCompleteTasks, deleteCompleteTasks} = todosSlice.actions;
export default todosSlice.reducer;
