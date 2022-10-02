import { memo } from "react";



export interface List {
    id: number;
    text: string;
    checked: boolean;
    onToggle: (id: number) => void;
}

const TodoList = ({ id, text, checked, onToggle }: List) => {
    return <li style={{ display: "flex" }}>
        <input type="checkbox" onChange={() => onToggle(id)} checked={checked} />
        <p>{text}</p>
    </li>
}

export default memo(TodoList);
// export default memo(ToDoList, (prev, next) => prev.checked === next.checked);