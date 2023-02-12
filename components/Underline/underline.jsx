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
              </div>
          </div>
      </div>
    )
  }
}