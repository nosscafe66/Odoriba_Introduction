import classes from './contactform.module.css'

export function ContactForm() {
    return (
        <div className={classes.ContactForm}>
            <form method="POST">
                <input className={classes.inputname} type="text" name="name" /><br />
                <input className={classes.inputname} type="text" name="name" /><br />
                <input className={classes.inputname} type="text" name="name" />
                <input className={classes.inputage} type="submit" value="送信" />
            </form>
        </div>
    )
}