import { useCallback } from "react";
import classes from "./indexbutton.module.css"

export function IndexButton() {
    const hundleClick = useCallback((e) => {
        console.log(e.target)
        for (let i = 0; i < 10; i++) {
            console.log(e.target + i)
            if (i == 5) {
                console.log("break")
                alert("break")
                break
            }
        }
    }, [])
    return (
        <div className={classes.IndexButton}>
            <ul>
                <li>
                    <button type="button" className={classes.Button}
                        onClick={hundleClick}>Button1</button>
                </li>
                <li>
                    <button type="button" className={classes.Button}
                        onClick={hundleClick}>Button2</button>
                </li>
                <li>
                    <button type="button" className={classes.Button}
                        onClick={hundleClick}>Button3</button>
                </li>

            </ul>
        </div>
    )
}