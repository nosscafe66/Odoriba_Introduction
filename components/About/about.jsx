import classes from './about.module.css'
import { TodoForm } from '@/components/TodoForm/todoform'
import { TodoList } from '@/components/TodoList/todolist'
import { useState } from 'react';
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const useCounter = () => {
  const [count, setCount] = useState(0)
  const [isShow, setIsShow] = useState(true)

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => { return !previsShow })
  })

  const hundleClick = useCallback((e) => {
    if (count < 10) {
      setCount(prevcount => prevcount + 1)
    }
  }, [count])
  return { count, isShow, handleDisplay, hundleClick }
}

const useInputArray = () => {
  const [text, setText] = useState("")
  const [array, setArray] = useState([])
  const handleChange = useCallback((e) => {
    if (text.length >= 5) {
      return
    }
    setText(e.target.value.trim())
  }, [])

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。")
        return prevArray
      }
      const newArray = [...prevArray, text]
      return newArray
    })
  }, [text])
  return { text, array, handleChange, handleAdd }
}
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