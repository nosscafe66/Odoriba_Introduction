import { useState } from 'react';
import { useCallback } from "react";

export const useCounter = () => {
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