import TodoList, { ListType } from "./ToDoList";
import ToDoInput from './ToDoInput';
import { useCallback, useReducer } from "react";

function MakeDummy() {
    const data = [];
    for (let i = 0; i < 2500; i++) {
        data.push({ id: i + 1, text: "할 일 #" + (i + 1), checked: false });
    }
    return data;
}

interface ActionType {
    type: string;
    id?: number;
}

const ListReducer = (lists: ListType[], action: ActionType): ListType[] => {
    switch (action.type) {
        case 'TOGGLE':
            return lists.map((list: ListType) => list.id === action.id ? { ...list, checked: !list.checked } : list)
        default:
            return lists
    }
}

const ToDoContainer = () => {
    const [lists, dispatch] = useReducer<(lists: ListType[], action: ActionType) => any, any>(ListReducer, undefined, MakeDummy);

    const onToggle = useCallback((id: number) => {
        // @ts-ignore
        dispatch({ type: 'TOGGLE', id })
    }, []);

    return <section>
        <h1>To Do List</h1>
        <ToDoInput />
        <ul>
            {lists.map((list: ListType) => (
                <TodoList key={list.id}
                    id={list.id}
                    text={list.text}
                    checked={list.checked}
                    onToggle={onToggle} />
            ))}
        </ul>
    </section>
}

export default ToDoContainer;