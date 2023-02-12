import Image from 'next/image'
import styles from './underline.module.css'

export function Underline(props) {
  if((props.page=="Contact") || (props.page =="Service") || (props.page =="About")){
    console.log(props.page)
  }
  else{
    return (
      <div>
          <div className={styles.center}>
              <div className={styles.thirteen}>
                <h1>Python</h1>
              </div>
              <div className={styles.thirteen}>
                <h1>AWS</h1>
              </div>
              <div className={styles.thirteen}>
                <h1>GCP</h1>
              </div>
              <div className={styles.thirteen}>
                <h1>React(Next.js)</h1>
              </div>
          </div>
      </div>
    )
  }
}