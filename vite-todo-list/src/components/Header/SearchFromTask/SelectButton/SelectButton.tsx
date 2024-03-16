import { FC, useState } from "react";
import styles from './SelectButton.module.css';
import { IoIosArrowDown } from "react-icons/io";

type TypeOptions = [string, string, string]

const options: TypeOptions = ['ALL', 'Complete', 'Incomplete',]

const SelectButton: FC = () => {

    const [option, setOption] = useState<TypeOptions[0]>(options[0]);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleIsOpenMenu = (): void => {
        setIsOpenMenu(!isOpenMenu);
    }

    const handleSelectOption = (index: number): void => {
        setOption(options[index])
        handleIsOpenMenu();
    }

    return (
        <div onClick={handleIsOpenMenu} className={!isOpenMenu ? styles.select : `${styles.select} ${styles.active}`} >
            {option}
            <div className={isOpenMenu ? styles.options : styles.toggle}>
                {options.map((option, index) => <div onClick={() => handleSelectOption(index)} className={styles.option} key={index}>{option}</div>)}
            </div>
            <IoIosArrowDown className="active"/>
        </div>
    )
}


export default SelectButton;