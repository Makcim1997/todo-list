import { FC, useEffect, useState } from "react";
import styles from './Task.module.css';
import { MdOutlineDone, MdEdit, MdDeleteOutline, MdSave } from "react-icons/md";
import { TypeTask } from "../../models/types";
import Button from "../../UI/Button/Button";
import Input from "./Input/Input";

interface ITask {
    task: TypeTask;
    deleteTask: (id: string) => void;
    setTasksIsDone: (id: string, isDoneTask: boolean) => void;
    updateTask: (task: TypeTask) => void;
}

const initTime: number = 5;

const Task: FC<ITask> = ({ task, deleteTask, setTasksIsDone, updateTask }) => {

    const [isDoneTask, setIsDoneTask] = useState<boolean>(false);
    const [isTheDelete, setIsTheDelete] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [time, setTime] = useState<number>(initTime);
    const [editTask, setEditTask] = useState<TypeTask>(task);

    
    
 
    const handleDoneTask = () => {
        setIsDoneTask(!isDoneTask);
        setTasksIsDone(task.id, isDoneTask);
    }

    const editPosition = () => {
        setEdit(!edit);
    }

    const saveEditTask = () => {
        updateTask(editTask);
        editPosition();
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
                {
                    edit ? <Input setEditTask={setEditTask} data={task} /> : <div className={styles.task + ` ${isDoneTask ? styles.done : styles.notDone}`}>{task.text}</div>
                }
                <div className={styles.controls}>
                    {
                        edit ? <MdSave onClick={saveEditTask}/> : <MdEdit onClick={editPosition}/>
                    }
                    <MdDeleteOutline onClick={handleToggleBtnDelete} />
                </div>
            </> : <Button onClick={handlerCancelDelete} className={styles.cancel}>{`${time} CANCEL DELETE`}</Button>}
        </div>
    )
}

export default Task;