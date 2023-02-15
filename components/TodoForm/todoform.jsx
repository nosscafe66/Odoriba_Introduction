import { useState } from 'react';
import calsses from '@/components/TodoForm/todoform.module.css'

export function TodoForm({ add }) {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = event => {
        setNewTodo(event.target.value);
    }

    const addTodo = () => {
        if (newTodo === '') return;
        add(newTodo);
        setNewTodo('');
    }
    return (
        <div>
            <h3>My Todo</h3>
            <input value={newTodo} onChange={handleChange} placeholder="Input here..." />
            <button className={calsses.button} onClick={addTodo}>ADD</button>

        </div>
    )
}