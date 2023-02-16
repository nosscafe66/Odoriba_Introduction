import { useState } from 'react';
import calsses from '@/components/TodoForm/todoform.module.css'

export function TodoForm({ add }) {
    //todoリストの配列
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
        <div className={calsses.todoform}>
            <h3>My Todo</h3>
            <input className={calsses.inputform} value={newTodo} onChange={handleChange} placeholder="Input here..." />
            <button className={calsses.button} onClick={addTodo}>ADD</button>
        </div>
    )
}