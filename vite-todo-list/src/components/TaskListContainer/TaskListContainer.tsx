import { FC } from "react";
import styles from './TaskListContainer.module.css';
import Task from "./Task/Task";
import { TypeTask } from "../models/types";


interface ITaskList {
    taskList: TypeTask[];
    deleteTask: (id: string) => void;
    setTasksIsDone: (id: string, isDoneTask: boolean) => void;
    updateTask: (task: TypeTask) => void;
}

const TaskListContainer: FC<ITaskList> = ({ taskList, deleteTask, setTasksIsDone, updateTask }) => {
    
    return (
        <div className={styles.container}>
            {taskList.map((task) => <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setTasksIsDone={setTasksIsDone}
            updateTask={updateTask} />)}
        </div>
    )
}


export default TaskListContainer;