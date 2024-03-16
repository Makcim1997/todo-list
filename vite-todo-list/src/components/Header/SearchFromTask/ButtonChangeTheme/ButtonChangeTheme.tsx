import { FC, useState, MouseEvent } from "react";
import styles from './ButtonChangeTheme.module.css';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ButtonChangeTheme: FC = () => {

    const [theme, setTheme] = useState<boolean>(true);

    const onChangeTheme = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setTheme(!theme);
    }

    return (
        <button className={styles.button} onClick={onChangeTheme}>
            {theme ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
    )
}


export default ButtonChangeTheme;