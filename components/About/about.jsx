import classes from './about.module.css'
import { TodoForm } from '@/components/TodoForm/todoform'
import { TodoList } from '@/components/TodoList/todolist'
import { useState } from 'react';


export function About() {
    //Aboutコンポーネント
    let countId = 0

    //todoリストの配列
    const [ todos, setTodos ] = useState([]);

    //todoリストに追加するためのアロー関数(追加処理)
    const addTodo = newTodo => {
        countId = countId + 1;
        setTodos([...todos, { id: countId, text: newTodo }]);
      }
      //todoリストのtodoを削除するためのアロー関数(削除処理)
      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
      }    
    return (
        <div className={classes.aboutwrapper}>
            <div className={classes.aboutcontext}>
                <h1>Hello,My name is Yuto</h1>
            </div>
            {/* TODOフォームコンポーネント */}
            <TodoForm add={addTodo}></TodoForm>
            <TodoList todos={todos} del={deleteTodo}></TodoList>
            {/* TODOLISTコンポーネント */}
                {/* <ul>
                    <button className={classes.button}>ボタン</button><br />
                    <button className={classes.button}>ボタン</button><br />
                    <button className={classes.button}>ボタン</button>
                </ul> */}
        </div>
    )
}