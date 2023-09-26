import classes from './contactform.module.css'
import { useCallback, useState } from "react";

export function ContactForm() {

    const [text, setText] = useState("")
    const handleChange = useCallback((e) => {
        e.target.value.trim()
    })


    return (
        <div className={classes.ContactForm}>
            <form method="POST">
            <h1>お問合せフォーム</h1>
                <p className={classes.namelabel}>
                    <label htmlFor="お名前">お名前<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <input className={classes.inputname} type="text" name="name" required="required" value={text}
                    onChange={handleChange} /><br />
                <p className={classes.namelabel}>
                    <label htmlFor="お電話番号">お電話番号<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <input className={classes.inputname} type="tel" name="phonenumber" required="required" value={text} onChange={handleChange}/><br />
                <p className={classes.namelabel}>
                    <label htmlFor="メールアドレス">メールアドレス<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <input className={classes.inputname} type="email" name="mailaddress" required="required" value={text} onChange={handleChange}/><br />
                <p className={classes.namelabel}>
                    <label htmlFor="性別">性別<span className={classes.mustcontext}>(必須)</span></label><br />
                    <input type="radio" name="num_of_inq" value="女" />女
                    <input type="radio" name="num_of_inq" value="男" />男
                </p>
                <p className={classes.namelabel}>
                    <label htmlFor="お問合せ種別">お問合せ種別<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <select required="required" className={classes.categoryselect} name="categoryselect" id="categoryselect">
                    <option value="select_no0"></option>
                    <option value="select_no1">エンジニア悩み相談について</option>
                    <option value="select_no2">未経験向けのエンジニア学習について</option>
                    <option value="select_no3">未経験から開発スキルを上げる方法について</option>
                    <option value="select_no4">開発の勉強方法について</option>
                    <option value="select_no5">プログラミングスキルの付け方</option>
                </select>
                <p className={classes.namelabel}>
                    <label htmlFor="お問合せ内容">お問合せ内容<span className={classes.mustcontext}>(必須)</span></label>
                </p>
                <textarea required="required" className={classes.contextarea} id="" cols="30" rows="10"></textarea><br />
                <input className={classes.inputage} type="submit" value="送信" />
            </form>
        </div>
    )
}