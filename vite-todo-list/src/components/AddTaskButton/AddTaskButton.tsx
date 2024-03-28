import { FC } from "react";
import styles from './AddTaskButton.module.css';
import { IoAddOutline } from "react-icons/io5";

type TypePropsAddTaskBtn = {
    toggleModalWindowPosition: () => void;
}


const AddTaskButton: FC<TypePropsAddTaskBtn> = ({ toggleModalWindowPosition }) => {

    return (
        <button onClick={toggleModalWindowPosition} className={styles.button}>
            <IoAddOutline />
        </button>
    )
}


export default AddTaskButton;