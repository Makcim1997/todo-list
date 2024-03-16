import React, { FC } from "react";
import styles from './TaskSearchForm.module.css';
import SelectButton from "./SelectButton/SelectButton";
import ButtonChangeTheme from "./ButtonChangeTheme/ButtonChangeTheme";
import { HiMagnifyingGlass } from "react-icons/hi2";

const TaskSearchFrom: FC = () => {
    return (
        <form className={styles.form}>
            <div className={styles.input}>
                <input type="text" name="title" placeholder="Search note..." />
                <HiMagnifyingGlass />
            </div>
            <SelectButton />
            <ButtonChangeTheme />
        </form>
    )
}

export default TaskSearchFrom;