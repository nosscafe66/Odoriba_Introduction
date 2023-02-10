import styles from '@/components/Main.module.css'
import { Links } from '@/components/links'
import { Underline } from '@/components/underline'
import { Headline } from '@/components/headline'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Underline />
        <Links />
      </main>
  )
}