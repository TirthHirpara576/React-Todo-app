// L34 :- Todo App  & best way to pass the key  ("Todo" folder)
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {

    const todoKey = "reactTodo";
    const [task, setTask] = useState(() => {  // Now, inputValue = Object  so,task is array of objects
        const rawTodos = localStorage.getItem(todoKey); // my initial data must be from the local storage rather than empty array([]).
        if (!rawTodos) return [];
        return JSON.parse(rawTodos);
    });

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        //to check if the input field is empty or not
        if (!content) return;

        // to check if the data is already existing or not
        // if (task.includes(inputValue)) return;
        const ifContentAlreadyExists = task.find(
            (curTask) => curTask.content === content
        );
        if (ifContentAlreadyExists) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    //todo add data to localStorage
    localStorage.setItem("reactTodo",JSON.stringify(task));

    // To delete one perticular item
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value); // this method returns items whose condition is true.
         setTask(updatedTask);
    };
    // To delete all the items
    const handleClearTodoData = () => {
        setTask([]);
    };

    // to checked perticular content whose button is clicked
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
        if (curTask.content === content) {
            return { ...curTask, checked: !curTask.checked };
        } else {
            return curTask;
        }
        });
        setTask(updatedTask);
    };

    return (
        <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnOrdList">
            <ul>
                {task.map((curTask) => {
                    return (
                        <TodoList
                            key={curTask.id}
                            data={curTask.content}
                            checked={curTask.checked}
                            onHandleDeleteTodo={handleDeleteTodo}
                            onHandleCheckedTodo={handleCheckedTodo}
                        />
                    );
                })}
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData}> Clear all </button>
        </section>
        </section>
    );
};