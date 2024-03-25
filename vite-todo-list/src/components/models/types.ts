export type TypeTask = {
    text: string,
    id: string,
    done: boolean,
}

export type TypePropsGetModalPosition = {
    toggleModalWindowPosition: () => void;
    modalWindowPosition?: boolean;
}