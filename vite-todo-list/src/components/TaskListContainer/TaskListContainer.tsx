import { FC } from "react";
import styles from './TaskListContainer.module.css';
import Task from "./Task/Task";

const TaskListContainer: FC = () => {
    return (
        <div className={styles.container}>
            <Task />
        </div>
    )
}


export default TaskListContainer;