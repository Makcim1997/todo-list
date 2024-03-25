import { FC } from "react";
import styles from './TaskListContainer.module.css';
import Task from "./Task/Task";
import { TypeTask } from "../models/types";


type TypeTaskList = {
    taskList: TypeTask[];
    deleteTask: (id: string) => void;
    setTasksIsDone: (id: string, isDoneTask: boolean) => void;
}

const TaskListContainer: FC<TypeTaskList> = ({ taskList, deleteTask, setTasksIsDone }) => {
    
    return (
        <div className={styles.container}>
            {taskList.map((task) => <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setTasksIsDone={setTasksIsDone} />)}
        </div>
    )
}


export default TaskListContainer;