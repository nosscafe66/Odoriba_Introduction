import calsses from '@/components/TodoList/todolist.module.css'

export function TodoList({ todos, del }) {
    return (
        <div className={calsses.torolist}>
            <h3 className={calsses.texttitle}>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        //console.log(todos)
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