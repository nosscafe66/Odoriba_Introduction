import Image from 'next/image'
import styles from './underline.module.css'

export function Underline(props) {
  if((props.page=="Contact") || (props.page =="Service")){
    console.log(props.page)
  }
  else{
    return (
      <div>
          <div className={styles.center}>
            <li>
              <div className={styles.thirteen}>
              </div>
            </li>
          </div>
      </div>
    )
  }
}