import styles from './Main.module.css'
import { Links } from '@/components/Link/links'
import { Underline } from '@/components/Underline/underline'
import { Headline } from '@/components/Headline/headline'
import { useEffect } from 'react'

export function Main(props) {
  //背景色を変更する。
  useEffect(() => {
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue"
    // let backgroundcolor = document.body.style.backgroundColor
    // for (let i = 0; i < 3; i++) {
    //   backgroundcolor = array[i]
    // }
    //アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Underline page={props.page}/>
      <Links page={props.page}/>
    </main>
  )
}