import { FC } from "react";
import styles from './Task.module.css';
import { MdOutlineDone, MdEdit, MdDeleteOutline } from "react-icons/md";

const Task: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.checked}>
                <MdOutlineDone />
            </div>
            <div className={styles.task}>To buy bread</div>
            <div className={styles.controls}>
                <MdEdit />
                <MdDeleteOutline />
            </div>
        </div>
    )
}


export default Task;