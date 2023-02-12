import Image from 'next/image'
import styles from './underline.module.css'
import { FaAws, FaGithub, FaPython, FaReact } from "react-icons/fa"
import { IconContext } from 'react-icons'
import { ClassNames } from '@emotion/react'

export function Underline(props) {
  if((props.page=="Contact") || (props.page =="Service") || (props.page =="About")){
  }
  else{
    return (
      <div>
          <div className={styles.center}>
              <IconContext.Provider value={{ color: '#ccc', size: '300px' }}>
              <div className={styles.thirteen}>
                <h1><FaPython /></h1>
              </div>
              <div className={styles.thirteen}>
                <h1>
                <FaAws />
                </h1>
              </div>
              <div className={styles.thirteen}>
                <h1><FaGithub /></h1>
              </div>
              <div className={styles.thirteen}>
                <h1><FaReact /></h1>
              </div>
              </IconContext.Provider>
          </div>
      </div>
    )
  }
}