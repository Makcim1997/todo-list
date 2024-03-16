import { FC } from "react";
import styles from './AddTaskButton.module.css';
import { IoAddOutline } from "react-icons/io5";

const AddTaskButton: FC = () => {
    return (
        <button className={styles.button}>
            <IoAddOutline />
        </button>
    )
}


export default AddTaskButton;