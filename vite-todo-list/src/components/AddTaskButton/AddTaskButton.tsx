import { FC } from "react";
import styles from './AddTaskButton.module.css';
import { IoAddOutline } from "react-icons/io5";
import { TypePropsGetModalPosition } from "../models/types";



const AddTaskButton: FC<TypePropsGetModalPosition> = ({ toggleModalWindowPosition }) => {

    return (
        <button onClick={toggleModalWindowPosition} className={styles.button}>
            <IoAddOutline />
        </button>
    )
}


export default AddTaskButton;