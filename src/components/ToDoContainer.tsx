import TodoList, { List } from "./ToDoList";
import ToDoInput from './ToDoInput';
import { useState } from "react";
import { useCallback, useReducer } from "react";

function MakeDummy() {
    const data = [];
    for (let i = 0; i < 3; i++) {
        data.push({ id: i + 1, text: "할 일 #" + (i + 1), checked: false });
    }
    return data;
}

interface ActionType {
    type: string;
    id: number;
}

const ListReducer = (lists: List[], action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE':
            return lists.map((list: List) => list.id === action.id ? { ...list, checked: !list.checked } : list)
    }
}

const ToDoContainer = () => {
    // @ts-ignore
    const [lists, dispatch] = useReducer(ListReducer, undefined, MakeDummy);

    const onToggle = useCallback((id: number) => {
        // @ts-ignore
        dispatch({ type: 'TOGGLE', id })
        // setLists((prev) => prev.map((list) => list.id === id ? { ...list, checked: !list.checked } : list))
    }, []);

    return <section>
        <h1>To Do List</h1>
        <ToDoInput />
        <ul>
            {lists.map((list: List) => (
                <TodoList key={list.id} id={list.id} text={list.text} checked={list.checked} onToggle={onToggle} />
            ))}
        </ul>
    </section>
}

export default ToDoContainer;