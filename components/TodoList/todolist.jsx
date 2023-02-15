import calsses from '@/components/TodoList/todolist.module.css'

export function TodoList({ todos, del }) {
    return (
        <div>
            <h5>Todo List</h5>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id}>
                                {todo.text}
                                <button className={calsses.button} onClick={() => del(todo.id)}>DEL</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}