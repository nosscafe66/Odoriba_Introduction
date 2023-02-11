import { useCallback } from "react";
import { useState } from "react";
import classes from "./indexbutton.module.css"

export function IndexButton() {
    const [count,setCount] = useState(0)
    const hundleClick = useCallback((e) => {
        setCount(count => count + 1)
    }, [])
    return (
        <div className={classes.IndexButton}>
            <h1>{count}</h1>
            <ul>
                <li>
                    <button page={count} type="button" className={classes.Button}
                        onClick={hundleClick}>Button1</button>
                </li>
                {/* <li>
                    <button type="button" className={classes.Button}
                        onClick={}>Button2</button>
                </li>
                <li>
                    <button type="button" className={classes.Button}
                        onClick={}>Button3</button>
                </li> */}
            </ul>
        </div>
    )
}