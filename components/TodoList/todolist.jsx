import calsses from '@/components/TodoList/todolist.module.css'
import { useState } from "react";

export function TodoList({ todos, del }) {
    const [todolist ,setTodoList] = useState(todos)
    return (
        <div className={calsses.torolist}>
            <h3 className={calsses.texttitle}>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                            return (
                                <li key={todo.id}>
                                    <p>{todo.text}</p>
                                    <button className={calsses.button} onClick={() => del(todo.id)}>DEL</button>
                                </li>
                            )
                    })
                }
            </ul>
        </div>
    )
}