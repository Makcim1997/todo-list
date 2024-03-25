import { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type TypeProsButton = {
    className: string;
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<TypeProsButton> = ({ onClick, className, children }) => {

    const classes: string = styles.button + ` ${className}`;

    return (
        <button onClick={onClick} className={classes}>{children}</button>
    )
}


export default Button;