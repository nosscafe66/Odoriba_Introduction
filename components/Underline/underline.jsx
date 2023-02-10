import Image from 'next/image'
import styles from './underline.module.css'

export function Underline() {
  return (
    <div>
        <div className={styles.center}>
          <li>
            <div className={styles.thirteen}>
            </div>
            <div className={styles.thirteen}>
            </div>
            <div className={styles.thirteen}>
            </div>
          </li>
        </div>
    </div>
  )
}