import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./indexbutton.module.css"

export function IndexButton() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [isShow, setIsShow] = useState(true)
    const [array, setArray] = useState([])
    const hundleClick = useCallback((e) => {
        if (count < 10) {
            setCount(prevcount => prevcount + 1)
        }
    }, [count])

    const handleChange = useCallback((e) => {
        if (text.length >= 5) {
            return
        }
        setText(e.target.value.trim())
    }, [])

    const handleDisplay = useCallback(() => {
        setIsShow((previsShow) => { return !previsShow })
    })

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
    return (
        <div className={classes.IndexButton}>
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
    )
}