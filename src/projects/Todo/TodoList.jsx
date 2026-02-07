// L34 :- Todo App  & best way to pass the key  ("Todo" folder)
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,checked,onHandleDeleteTodo,onHandleCheckedTodo,}) => { // Parent to child communication using props
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}> <MdCheck /> </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}> <MdDeleteForever /> </button>
        </li>
    );
};