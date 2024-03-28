import { FC, useState, ChangeEvent } from 'react';
import styles from './Input.module.css';
import { TypeTask } from '../../../models/types';

interface IEditTask {
    data: TypeTask;
    setEditTask: (task: TypeTask) => void;
}

const Input: FC<IEditTask> = ({ data, setEditTask }) => {

    const [changeTask, setChangeTask] = useState<TypeTask>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setChangeTask({
            ...changeTask,
            text,
        })
    }
    

    return (
        <div className={styles.input}>
            <input onBlur={() => setEditTask(changeTask)} onChange={handleChange} type="text" value={changeTask.text} name="title" placeholder="Enter change..." />
        </div>
    )
}


export default Input;