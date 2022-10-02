import { MdAdd } from 'react-icons/md';

const ToDoInput = () => {
    return <form>
        <input type="text" placeholder="Insert what u gonna do" />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
}

export default ToDoInput;