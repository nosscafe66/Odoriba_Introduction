import { useState } from 'react';
import { useCallback } from "react";

export const useInputArray = () => {
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