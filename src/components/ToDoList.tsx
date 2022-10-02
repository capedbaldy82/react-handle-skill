import { memo } from "react";



export interface ListType {
    id: number;
    text: string;
    checked: boolean;
    onToggle: (id: number) => void;
}

const TodoList = ({ id, text, checked, onToggle }: ListType) => {
    return <li style={{ display: "flex" }}>
        <input type="checkbox" onChange={() => onToggle(id)} checked={checked} />
        <p>{text}</p>
    </li>
}

export default memo(TodoList);
// export default memo(ToDoList, (prev, next) => prev.checked === next.checked);