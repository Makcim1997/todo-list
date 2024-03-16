import { FC } from "react";
import styles from './Header.module.css';
import TaskSearchFrom from './SearchFromTask/TaskSearchForm';


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>TODO LIST</h1>
            <TaskSearchFrom />
        </header>
    )
}

export default Header;