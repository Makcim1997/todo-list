import { FC, useEffect, useState } from "react";
import styles from './Task.module.css';
import { MdOutlineDone, MdEdit, MdDeleteOutline } from "react-icons/md";
import { TypeTask } from "../../models/types";
import Button from "../../UI/Button/Button";

type Task = {
    task: TypeTask;
    deleteTask: (id: string) => void;
    setTasksIsDone: (id: string, isDoneTask: boolean) => void;
}

const initTime: number = 5;

const Task: FC<Task> = ({ task, deleteTask, setTasksIsDone }) => {

    const [isDoneTask, setIsDoneTask] = useState<boolean>(false);
    const [isTheDelete, setIsTheDelete] = useState<boolean>(false);
    const [time, setTime] = useState<number>(initTime);

    const handleDoneTask = () => {
        setIsDoneTask(!isDoneTask);
        setTasksIsDone(task.id, isDoneTask);
    }

    const handleToggleBtnDelete = () => {
        setIsTheDelete(!isTheDelete);
    }

    const handlerCancelDelete = () => {
        handleToggleBtnDelete();
        setTime(initTime)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            isTheDelete &&
                setTime((time) => time >= 0 ? time - 1 : 5);
        }, 1000)

        if (time === 0) {
            setIsTheDelete(false);
            deleteTask(task.id);
        }

        return () => {
            clearInterval(interval);
        }
    }, [time, isTheDelete])


    return (
        <div className={styles.wrap}>
            {!isTheDelete ?
             <>
                <div onClick={handleDoneTask} className={styles.checked + ` ${isDoneTask ? styles.active : styles.notActive}`}>
                <MdOutlineDone />
                </div>
                <div className={styles.task + ` ${isDoneTask ? styles.done : styles.notDone}`}>{task.text}</div>
                <div className={styles.controls}>
                    <MdEdit />
                    <MdDeleteOutline onClick={() => {handleToggleBtnDelete()}} />
                </div>
            </> : <Button onClick={handlerCancelDelete} className={styles.cancel}>{`${time} CANCEL DELETE`}</Button>}
        </div>
    )
}

export default Task;