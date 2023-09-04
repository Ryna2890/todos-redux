import React from "react";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import {Container, TaskStyled, Text} from "./Task.styled";
import {ITask} from "../../features/todos/types";


interface TaskProps {
    task: ITask;
    onChange: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({ task, onChange }) => {
    return (
        <Container id={task.id} done={task.completed}>
            <CustomCheckbox
                isChecked={task.completed}
                onChange={() => onChange(task.id)}
            />
            <Text>
                {task.title}
            </Text>
        </Container>
    );
};

export default Task;