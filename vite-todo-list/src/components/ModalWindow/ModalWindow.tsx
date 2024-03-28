import { FC } from "react";
import styles from './ModalWindow.module.css';

type TypePropsModalWindowAddTask = {
    toggleModalWindowPosition: () => void;
    modalWindowPosition?: boolean;
    children: JSX.Element;
}

const ModalWindowAddTask: FC<TypePropsModalWindowAddTask>  = ({ modalWindowPosition, toggleModalWindowPosition, children }) => {

    return (
        <div onClick={toggleModalWindowPosition} className={styles.window + ` ${modalWindowPosition ? styles.open : styles.close}`}>
            <div onClick={e => e.stopPropagation()} className={styles.content}>
                {children}
            </div>
        </div>
    )
}


export default ModalWindowAddTask;