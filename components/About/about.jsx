import classes from './about.module.css'
import { TodoForm } from '@/components/TodoForm/todoform'
import { TodoList } from '@/components/TodoList/todolist'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useCounter } from '../lib/useCounter';
import { useInputArray } from '../lib/useInputArray';
import { Blog } from '../Blog/blog';

export function About() {
  const { count, isShow, handleDisplay, hundleClick } = useCounter()
  const { text, array, handleChange, handleAdd } = useInputArray()
  //Aboutコンポーネント
  let Id = ''

  //todoリストの配列
  const [todos, setTodos] = useState([]);

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
      <div className={classes.grid}>
        <div className={classes.aboutcontext}>
          <TodoList todos={todos} del={deleteTodo} />
        </div>
      </div><br /><br /><br />
      <div>
        {isShow ? <h1>{count}</h1> : null}
        <input type="text" value={text}
          onChange={handleChange} /><br />
        <button onClick={handleAdd}>追加</button>

        <ul>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
        <button page={count} type="button" className={classes.Button}
          onClick={hundleClick}>Button</button>
        <button type="button" className={classes.Button}
          onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      </div>

    </div>
  )
}