import Image from 'next/image'
import styles from './Headline.module.css'

export function Headline(props) {
    if((props.page=="Information") || (props.page=="About")){
    }else{
        return (
            <div>
                <h1 className={styles.title}>{props.page[0].toUpperCase() + props.page.slice(1)} Page</h1>
                <div className={styles.description}>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}
