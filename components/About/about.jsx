import classes from './about.module.css'
import { TodoForm } from '@/components/TodoForm/todoform'
import { TodoList } from '@/components/TodoList/todolist'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";


export function About() {
    //Aboutコンポーネント
    let Id = ''

    //todoリストの配列
    const [ todos, setTodos ] = useState([]);

    //todoリストに追加するためのアロー関数(追加処理)
    const addTodo = newTodo => {
        Id = uuidv4();
        setTodos([...todos, { id: Id, text: newTodo }]);
      }
      //todoリストのtodoを削除するためのアロー関数(削除処理)
      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
      }    
    return (
        <div>
        <TodoForm add={addTodo} />
        <div className={classes.aboutwrapper}>
            <div className={classes.aboutcontext}>
            <TodoList todos={todos} del={deleteTodo} />
            </div>
        </div>

        </div>
    )
}