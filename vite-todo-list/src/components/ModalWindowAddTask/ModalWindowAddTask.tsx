import { FC, MouseEvent } from "react";
import styles from './ModalWindowAddTask.module.css';
import TypePropsGetModalPosition from "../models/types";

const ModalWindowAddTask: FC<TypePropsGetModalPosition>  = ({ modalWindowPosition, getModalWindowPosition }) => {

    const addTask = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        getModalWindowPosition();
    };

    const canselTask = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        getModalWindowPosition();
    }   


    return (
        <div onClick={getModalWindowPosition} className={styles.window + ` ${modalWindowPosition ? styles.open : styles.close}`}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                <h2>NEW NOTE</h2>
                <form className={styles.form}>
                    <div className={styles.input}>
                        <input type="text" name="title" placeholder="Input your note..." />
                    </div>
                    <div className={styles.controls}>
                        <button onClick={canselTask} className={styles.button}>CANCEL</button>
                        <button onClick={addTask} className={styles.button}>APPLY</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ModalWindowAddTask;