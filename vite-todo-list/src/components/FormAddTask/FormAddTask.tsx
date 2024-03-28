import { FC, ChangeEvent, MouseEvent, useState } from "react";
import styles from '../../styles/FormTask.module.css';
import { TypeTask } from "../models/types";
import Button from "../UI/Button/Button";

type TypeFormPropsAddTask = {
    toggleModalWindowPosition: () => void;
    addTask: (task: TypeTask) => void;
}

const initState: TypeTask = {
    text: '',
    id: '',
    done: false,
};

const FormAddTask: FC<TypeFormPropsAddTask> = ({ toggleModalWindowPosition, addTask }) => {

    const [newTask, setNewTask] = useState(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const text: string = e.target.value;

        setNewTask({
            text,
            id: String(Math.random()),
            done: false,
        });
    }

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        toggleModalWindowPosition();
        
        if (newTask.text) {
            addTask(newTask);
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
                    <input type="text" onChange={handleChange} value={newTask.text} name="title" placeholder="Input your note..." />
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