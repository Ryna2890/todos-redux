import React, {useEffect, useState} from "react";
import Input from "../Input/Input";
import Task from "../Task/Task";
import {CustomButton} from "../CustomButton/CustomButton";
import {Buttons, Container, Wrapper} from "./TaskBoard.styled";
import {ITask} from "../../features/todos/types";
import {addTask, deleteCompleteTasks, toggleCompleteTasks} from "../../features/todos/todosSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

export const TaskBoard: React.FC = () => {
    const [data, setData] = useState<ITask[] | undefined>();
    const allTasks = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();
    const addNewTask = (value: string) => {
        const newTask: ITask = {title: value, completed: false, id: Date.now().toString()};
        dispatch(addTask(newTask));

    }
    const toggleCompletedTask = (id: string) => {
        dispatch(toggleCompleteTasks(id));
    }

    const buttonClick = (type: string) => {
        switch (type) {
            case 'Active':
                setData(allTasks.tasks.filter(
                    (task) => task.completed === false));
                break
            case 'Completed':
                setData(allTasks.tasks.filter(
                    (task) => task.completed === true));
                break
            case 'Clear':
                dispatch(deleteCompleteTasks(true));
                break
            default :
                setData(allTasks.tasks)
        }

    }

    useEffect(() => {
        if (allTasks.tasks.length) setData(allTasks.tasks)
    }, [allTasks.tasks]);

    return <Wrapper>
        <Container>
            <Input onChange={addNewTask}/>
            {data?.length ?
                data.map((task, i) =>
                    <Task task={task} onChange={toggleCompletedTask} key={i}/>
                ):null}
            <Buttons>
                <CustomButton text={'All'} onClick={() => buttonClick('All')}/>
                <CustomButton text={'Active'} onClick={() => buttonClick('Active')}/>
                <CustomButton text={'Completed'} onClick={() => buttonClick('Completed')}/>
                <CustomButton text={'Clear Completed'} onClick={() => buttonClick('Clear')}/>
            </Buttons>
        </Container>
    </Wrapper>
}