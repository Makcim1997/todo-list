import { FC, ChangeEvent, MouseEvent, useState } from "react";
import styles from './FormAddTask.module.css';
import { TypeTask } from "../models/types";
import Button from "../UI/Button/Button";

type TypeFormPropsAddTask = {
    toggleModalWindowPosition: () => void;
    addTask: (task: TypeTask) => void;
}

const initState: string = '';

const FormAddTask: FC<TypeFormPropsAddTask> = ({ toggleModalWindowPosition, addTask }) => {

    const [newTask, setNewTask] = useState(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const text: string = e.target.value;

        setNewTask(text);
    }

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        toggleModalWindowPosition();
        
        if (newTask) {
            addTask({
                text: newTask,
                id: String(Math.random()),
                done: false,
            })
        }

        setNewTask(initState);
    };

    const canselTask = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        toggleModalWindowPosition();
        setNewTask(initState);
    }  


    return (
        <>
            <h2>NEW NOTE</h2>
            <form className={styles.form}>
                <div className={styles.input}>
                    <input type="text" onChange={handleChange} value={newTask} name="title" placeholder="Input your note..." />
                </div>
                <div className={styles.controls}>
                    <Button onClick={canselTask} className={styles.button}>CANCEL</Button>
                    <Button onClick={handleSubmit} className={styles.button}>APPLY</Button>
                </div>
            </form>
        </>
    )
}


export default FormAddTask;